<template>
  <v-card>
    <v-card-title>
      {{ $t('dataset.createExample') }}
    </v-card-title>
    <v-card-text>
      <v-overlay :value="isImporting">
        <v-progress-circular indeterminate size="64" />
      </v-overlay>
      <v-textarea v-model="comment" :label="$t('dataset.text')" autofocus counter filled>
      </v-textarea>
      <v-text-field v-model="rating" label="rating" filled hint="1 - 5" persistent-hint>
      </v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn class="text-capitalize ms-2" :disabled="isDisabled" 
        @click="createDocument(true)">
        {{ $t('generic.add') }} & {{ $t('generic.close') }}
      </v-btn>
      <v-btn class="text-capitalize ms-2 primary" :disabled="isDisabled"
        @click="createDocument(false)">
        {{ $t('generic.add') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  
  layout: 'project',

  data() {
    return {
      comment: '',
      rating: null,
      errors: [],
      isImporting: false
    }
  },

  computed: {
    isDisabled() {
      return this.comment.length === 0 || this.rating === null
    }
  },

  methods: {
    async createDocument(close = false) {
      this.isImporting = true;

      const id_project = this.$route.params.id;

      const newExample = {
        id: 0,
        text: this.comment,
        meta: {
          rating: this.rating
        },
        annotationApprover: null,
        commentCount: 0,
        isApproved: false,
        fileUrl: '',
        filename: '',
        url: '',
        isConfirmed: false
      };

      await this.$services.example.create(id_project, newExample);
      this.isImporting = false;

      if(close) {
        this.$router.push(`/projects/${this.$route.params.id}/dataset`);  
      } else {
        this.comment = '';
        this.rating = null;
      }
    }
  }
}
</script>
