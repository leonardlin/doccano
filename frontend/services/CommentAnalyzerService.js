import axios from 'axios';

export class CommentAnalyzerService {
  static API_ROOT = 'https://comment-analyzer.peoplegeist.com/api';

  /**
   * returns a list of tupples, <topic, aspect, pos/neg>
   * @param comment
   */
  async inference (comment) {
    console.log('inference: ' + comment);
    try {
      const res = await axios.post(CommentAnalyzerService.API_ROOT + '/inference-doccano', { text: comment });
      return res.data;
    } catch (e) {
      console.error('inference error: ', e);
      return []
    }
  }
}
