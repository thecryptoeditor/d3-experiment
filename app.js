let dummyData = [
    {id: 'd1', state: 'FGHJ', value: '200'},
    {id: 'd2', state: 'RTYU', value: '120'},
    {id: 'd3', state: 'CVBNM', value: '140'},
    {id: 'd4',  state: 'RTYGHB', value: '160'},
]

const xScale = d3.scaleBand().domain(dummyData.map( i => i.state)).rangeRound([0, 250]).padding(0.1);
const yScale = d3.scaleLinear().domain([0, 250]).range([250, 0]);

// scaleBand() > Uniform width of the array. 
// rangeRound() > How much space is available. `Here we need to define min max value`
// They not give height and width, they give a fucntion thats allow us to translate a value.
// domain() > Which min and max value we want to be able to map into our chart.
// range > [Mix, Min]

const container = d3.select('svg')
    .classed('container', true) // Pushing the class in body
    .style('border', '1px solid green');

const bar = container
    .selectAll('.bar')
    .data(dummyData) // Pushing dummy data in the bar section 
    .enter() // enter is check is present if not pushh the div or whatever you gonna push.
    .append('rect') // Append a div to body
    .classed('bar', true) // Pushing the class in body
    .attr('width', xScale.bandwidth())
    .attr('height', (aData) => 250 - yScale(aData.value))
    .attr('x', (aData => xScale(aData.state)))
    .attr('y', (aData => yScale(aData.value)));

