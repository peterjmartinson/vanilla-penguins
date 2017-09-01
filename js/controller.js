// note the Named function expressions!
// (i.e. var A = function B() {} )
var PenguinController = function PenguinController(penguinView, penguinModel) {
  // uses Inversion of Control, which
  // 1. abstracts code from implementation details, and
  // 2. enables you to write clean code
  this.penguinView = penguinView;
  this.penguinModel = penguinModel;
};



PenguinController.prototype.initialize = function initialize() {
  // another contract from PenguinView
  this.penguinView.onClickGetPenguin = this.onClickGetPenguin.bind(this);
};



PenguinController.prototype.onClickGetPenguin = function onClickGetPenguin(e) {
  var target = e.currentTarget;
  var index = parseInt(target.dataset.penguinIndex, 10);
  this.penguinModel.getPenguin(index, this.showPenguin.bind(this));
};



PenguinController.prototype.showPenguin = function showPenguin(penguinModelData) {

  // Why isn't this somehow imported from the Model?
  var penguinViewModel = {
    name         : penguinModelData.name,
    imageUrl     : penguinModelData.imageUrl,
    size         : penguinModelData.size,
    favoriteFood : penguinModelData.favoriteFood
  };

  // next and previous penguins
  penguinViewModel.previousIndex = penguinModelData.index - 1;
  penguinViewModel.nextIndex = penguinModelData.index + 1;
  if (penguinModelData.index === 0) {
    penguinViewModel.previousIndex = penguinModelData.count - 1;
  }
  if (penguinModelData.index === penguinModelData.count - 1) {
    penguinViewModel.nextIndex = 0;
  }

  // render the damn penguin
  // uses the View's contract - "render"
  this.penguinView.render(penguinViewModel);
};

module.exports = PenguinController;
