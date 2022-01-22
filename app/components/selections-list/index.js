import Component from '@glimmer/component';

export default class SelectionsListComponent extends Component {
  get rows () {
    return this.args.selectionsList;
  }
}
