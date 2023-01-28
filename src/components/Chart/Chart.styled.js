import styled from '@emotion/styled/macro';

export const DoughnutWrapper = styled.div`
width: 288px;
height: 288px;
`;





//перша спроба
// const textCenter = {
//     id: 'textCenter',
//     beforeDataSetsDraw(chart, arg, pluginsOptions) {
//       const { ctx, data } = chart;
//       ctx.save();
//       ctx.font = 'bolder 27px sans-serif';
//       // font Circe
//       ctx.fillStyle = 'red';
//       ctx.textBaseline = 'middle';
//       ctx.textAlign = 'center';
//       ctx.fillText(
//         'text',
//         chart.getDatasetMeta(0).data[0].x,
//         chart.getDatasetMeta(0).data[0].y
//       );
//     },
//   };

//модифіковане
// const textCenter = {
//     id: 'textCenter',
//     beforeDataSetsDraw(chart, arg, pluginsOptions) {
//       const { ctx, data } = chart;
//       ctx.restore();
//       ctx.save();
//       ctx.font = 'bolder 27px sans-serif';
//       // font Circe
//       const width = chart.width;
//         const height = chart.height;
//       ctx.fillStyle = 'red';
//       ctx.textBaseline = 'middle';
//       ctx.textAlign = 'center';
//       const textY = height / 2;
//       const textX = width / 2;
//       ctx.fillText(
//         'text', textX, textY
//       );
//     },
//   };


//Don`t work Stack overflow
// const textCenter = [{
//     beforeDraw: function(chart) {
//   const width = chart.width,
//          height = chart.height,
//          ctx = chart.ctx;
//          ctx.restore();
//          const fontSize = (height / 160).toFixed(2);
//          ctx.font = fontSize + "em sans-serif";
//          ctx.textBaseline = "top";
//          const text = "Foo-bar",
//          textX = Math.round((width - ctx.measureText(text).width) / 2),
//          textY = height / 2;
//          ctx.fillText(text, textX, textY);
//          ctx.save();
//     } 
//   }]

