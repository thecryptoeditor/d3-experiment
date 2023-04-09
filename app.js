let dummyData = [
    {id: 'd1', name: 'Jatin', state: 'FGHJ', value: '10'},
    {id: 'd2', name: 'Jatin1', state: 'RTYU', value: '12'},
    {id: 'd3', name: 'Jatin2', state: 'CVBNM', value: '14'},
    {id: 'd4', name: 'Jatin3', state: 'RTYGHB', value: '16'},
]

// d3.select('div')
//     .selectAll('p')
//     .data(dummyData)
//     .enter()
//     .append('p')
//     .text( dta => dta.id);


const container = d3.select('div')
    .classed('container', true) // Pushing the class in body
    .style('border', '1px solid red');

const bar = container
    .selectAll('.bar')
    .data(dummyData) // Pushing dummy data in the bar section 
    .enter() // enter is check is present if not pushh the div or whatever you gonna push.
    .append('div') // Append a div to body
    .classed('bar', true) // Pushing the class in body
    .text();