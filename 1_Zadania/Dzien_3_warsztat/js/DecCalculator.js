import {Calculator} from "./Calculator"

class DecCalculator extends Calculator{
  add(numberX, numberY) {
      return [0,0,0,0,0,0,0,0];
  }

  /* Abstract method changing number
  *  @param {jQuery element} root Parent element
  */
  changeNumber(root) {
    let activeElement = root.find('.active');
    activeElement.removeClass("active");
    activeElement.siblings().addClass("active");
  }

  /* Abstract method changing Result
  */
  updateResult() {
  }
  initEvents(){
    let self = this;
    this.$calculatorDOMElement.find(".display-number").on('keyup', "input", function(event) {
        console.log($(this).val());
        const parentLabel = $(event.target).parent(".display-number");
        self.changeNumber(parentLabel);
    })
  }

}

export {DecCalculator};
