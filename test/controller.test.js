var PenguinController = require('../js/controller'),
    assert = require('assert');

var penguinViewMock = function penguinViewMock() {
  this.calledRenderWith = null;
};

// render is a "contract"
penguinViewMock.prototype.render = function render(penguinViewModel) {
  this.calledRenderWith = penguinViewModel;
};

// Arrange
var penguinViewMock = new penguinViewMock();

var controller = new PenguinController(penguinViewMock, null);

var penguinModelData = {
  name : 'Chinstrap',
  imageUrl : 'http://chinstrapl.jpg',
  size: '5.0kg (m), 4.8kg (f)',
  favoriteFood : 'krill',
  index : 2,
  count : 5
};

// Act
controller.showPenguin(penguinModelData);

// Assert

describe('The Controller', function() {
  it('should show the name', function() {
    assert.strictEqual(penguinViewMock.calledRenderWith.name, 'Chinstrap');
  });
  it('should show the image URL', function() {
    assert.strictEqual(penguinViewMock.calledRenderWith.imageUrl, 'http://chinstrapl.jpg');
  });
  it('should show the size', function() {
    assert.strictEqual(penguinViewMock.calledRenderWith.size, '5.0kg (m), 4.8kg (f)');
  });
  it('should show the favorite food', function() {
    assert.strictEqual(penguinViewMock.calledRenderWith.favoriteFood, 'krill');
  });
  it('should show the previous index', function() {
    assert.strictEqual(penguinViewMock.calledRenderWith.previousIndex, 1);
  });
  it('should show the next index', function() {
    assert.strictEqual(penguinViewMock.calledRenderWith.nextIndex, 3);
  });
});



















