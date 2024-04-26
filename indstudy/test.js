const container = d3.select('#scrolly-side');
const stepSel = container.selectAll('.step');
let imageList = ['indimg/Finger_model01.JPG', 'indimg/Finger_model02.JPG', 'indimg/misprints4.JPG', 'indimg/finger_model04.2.JPG', 'indimg/finger_model03.JPG','indimg/motor_attach01.JPG','indimg/finger_model05.2.JPG','indimg/hand_attach01.JPG','indimg/hand_attach02.JPG','indimg/hand_attach03.2.JPG', 'indimg/hand_attach04.2.JPG']
// let image2List = ['indimg/motor_attach01.JPG','indimg/finger_model05.JPG']

function updateChart(index) {
  const sel = container.select(`[data-index='${index}']`);
  const width = sel.attr('data-width');
  const ind = sel.attr('data-index');
  stepSel.classed('is-active', (d, i) => i === index);
  container.select('.photo').attr('src', imageList[index]);
//   container.select('.photo2').attr('src', image2List[index]);
}

function init() {
  Stickyfill.add(d3.select('.sticky').node());

  enterView({
    selector: stepSel.nodes(),
    offset: 0.5,
    enter: el => {
      const index = +d3.select(el).attr('data-index');
      updateChart(index);
    },
    exit: el => {
      let index = +d3.select(el).attr('data-index');
      index = Math.max(0, index - 1);
      updateChart(index);
    } });

}

init();