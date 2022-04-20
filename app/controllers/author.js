import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class AuthorController extends Controller {
  @service dataService;
  searchTerm = '';
  @tracked isLoading;

  async loadData() {
    this.isLoading = true;
    const data = await this.dataService.getAuthors(this.searchTerm);
    this.model = data;
    this.isLoading = false;
  }
}
