function drawScatterChart(x_axis_label, y_axis_label, z_axis_label, dataArray, chart_location, colors) {
            // console.log("Displaying cool chart!");

            const data = {
                datasets: [{
                    label: 'X (' + x_axis_label + ') vs Y (' + y_axis_label + ')',
                    data: dataArray,
                    backgroundColor: colors
                }]
            };
            const ctx = document.getElementById(chart_location);
            const myChart = new Chart(ctx, {
                type: 'bubble',
                data: data,
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    let label = context.dataset;
                                    return context.raw.team;
                                }
                            }
                        }
                    },
                        scales: {
                        y: {
                            beginAtZero: true
                        },

                    }
                }
            });
        }