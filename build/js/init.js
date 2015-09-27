$( document ).ready(function() {
    var body = $('body');

// ==============================================================
// Scroll Stuff
// ==============================================================
    $('.back-to-top').click(function(){
	   backToTop();
    });

    function backToTop(){
        $('html,body').animate({scrollTop:0},'fast');
        return false;
    }

    $.scrollIt({
      
      scrollTime: 1000,       // how long (in ms) the animation takes
      activeClass: 'active', // class given to the active nav element
      topOffset: 20           // offste (in px) for fixed top navigation
    });

// ==============================================================
// Masonry w/ ImagesLoaded
// ==============================================================
    var $masonry_holder = $('.feed.med > ol, .feed.sm > ol');

    $masonry_holder.imagesLoaded( function() {
        $masonry_holder.masonry({
            itemSelector: '.item'
        });
    });

// ==============================================================
// Menu Toggle
// ==============================================================
    var menu_toggle = $("#nav-toggle");
    var nav = $("#nav");

    menu_toggle.click(function(event) {
        toggle_main_menu();
        return false;
    });

    $("#nav li a").click(function(event) {

        toggle_main_menu();
    });

    function toggle_main_menu(){
        nav.fadeToggle();
    }

// ==============================================================
// SVG stuff
// ==============================================================
    // var s = Snap("#solution-animation");
    // var l = Snap.load("../images/slides/solution/solution-1.svg", onSVGLoaded ) ;

    // function onSVGLoaded( data ){ 
    //     s.append( data );


    // }
    


// ==============================================================
// Counters
// ==============================================================
    var count_percent = {suffix : '%'};

    var count_dollar = {prefix : '$' };


    var accidental_clicks = new CountUp("accidental-clicks", 0, 50, 0, 2, count_percent);

    var market_retail = new CountUp("market-retail", 0, 1.75, 1, 2, {prefix: "$", suffix: "B"});
    var market_travel = new CountUp("market-travel", 0, 382.5, 1, 2,  {prefix: "$", suffix: "M"});
    var market_digital = new CountUp("market-digital", 0, 760, 0, 2,  {prefix: "$", suffix: "M"});
    var market_tickets = new CountUp("market-tickets", 0, 80, 0, 2,  {prefix: "$", suffix: "M"});
    var market_total = new CountUp("market-total", 0, 2.97, 2, 2,  {prefix: "$", suffix: "B"});

    var conversions_1 = new CountUp("conversions-1", 0, .5, 1, 2.5,  {suffix: "%"});
    var conversions_2 = new CountUp("conversions-2", 0, 1, 1, 2.5,  {suffix: "%"});

    var comissions_1 = new CountUp("comissions-1", 0, 6, 0, 2.5,  {suffix: "%"});
    var comissions_2 = new CountUp("comissions-2", 0, 12, 0, 2.5,  {suffix: "%"});

    var comissions2_1 = new CountUp("comissions2-1", 0, 10, 0, 2.5,  {suffix: "%"});
    var comissions2_2 = new CountUp("comissions2-2", 0, 30, 0, 2.5,  {suffix: "%"});

    var clickthrough = new CountUp("clickthrough", 0, .1, 2, 2.5,  {suffix: "%"});

    

    function startCount(counter){
        counter.reset();
        counter.start();
    }

// ==============================================================
// Timeline
// ==============================================================
   // var timelineBlocks = $('.cd-timeline-block'),
   //      offset = 0.8;

   //  //hide timeline blocks which are outside the viewport
   //  hideBlocks(timelineBlocks, offset);

   //  //on scolling, show/animate timeline blocks when enter the viewport
   //  $(window).on('scroll', function(){
   //      (!window.requestAnimationFrame) 
   //          ? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
   //          : window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
   //  });

   //  function hideBlocks(blocks, offset) {
   //      blocks.each(function(){
   //          ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
   //      });
   //  }

   //  function showBlocks(blocks, offset) {
   //      blocks.each(function(){
   //          ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
   //      });
   //  }

// ==============================================================
// Charts
// ==============================================================
    function addCommas(nStr){
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }

    function kFormatter(num) {
        return num > 999 ? (num/1000) + 'K' : num
    }

    function mFormatter(num) {
        return num > 999999 ? (num/1000000).toFixed(1) + 'M' : num
    }

    function numFormater(num){
        var num = mFormatter(num);
        num = kFormatter(num);
        return num;
    }

    //Chart.defaults.global.responsive = true;
    Chart.defaults.global.tooltipFontSize = 16;
    Chart.defaults.global.tooltipYPadding = 10;
    Chart.defaults.global.tooltipXPadding = 10;
    Chart.defaults.global.tooltipCornerRadius = 0;
    Chart.defaults.global.tooltipFillColor = "#495259";
    Chart.defaults.global.tooltipFontFamily = "'Open sans', 'Helvetica', 'Arial', sans-serif";


  

    var us_market_data = [{
        value: 350,
        color:"#5f87b6",
        label: "RETAIL"
        },
        {value: 4,
        color: "#81b4df",
        label: "TICKETS"
        },

        {value: 153,
        color: "#95bad9",
        label: "TRAVEL"
        },
        {value: 76,
        color: "#5e9bcf",
        label: "DIGITAL ADS"
        }];

    var us_market_canvas = $("#us-market").get(0).getContext("2d");

    // var sales_data = {
    //     labels: ["Jul-15", "Aug-15", "Sep-15", "Oct-15", "Nov-15", "Dec-15", "Jan-16", "Feb-16", "Mar-16", "Apr-16", "May-16", "Jun-16", "Jul-16", "Aug-16", "Sep-16", "Oct-16", "Nov-16", "Dec-16", "Jan-17", "Feb-17", "Mar-17", "Apr-17", "May-17", "Jun-17", "Jul-17", "Aug-17", "Sep-17", "Oct-17", "Nov-17", "Dec-17"],
    //     datasets: [
    //         {
    //             label: "My First dataset",
    //             fillColor: "#80b1d2",
    //             strokeColor: "#495259",
    //             pointColor: "#495259",
    //             pointStrokeColor: "#fff",
    //             pointHighlightFill: "#fff",
    //             pointHighlightStroke: "rgba(220,220,220,1)",
    //             data: [4846.03 , 7499.01 , 14793.48 , 52800.00 , 158400.00 , 261800.00 , 221760.00 , 332640.00 , 498960.00 , 1020600.00 , 1530900.00 , 2296350.00 , 3444525.00 , 5166787.50 , 11302347.66 , 21797384.77 , 39235292.58 , 58852938.87 , 42913601.26 , 45059281.32 , 47312245.39 , 49677857.66 , 57957500.60 , 60855375.63 , 63898144.41 , 67093051.63 , 107013417.35 , 157014514.08 , 216680029.43 , 249182033.84 ]
    //         }
    //     ]
    // };

    // var sales_canvas = $("#sales").get(0).getContext("2d");

    // var net_rev_data = {
    //     labels: ["Mar-16", "Apr-16", "May-16", "Jun-16", "Jul-16", "Aug-16", "Sep-16", "Oct-16", "Nov-16", "Dec-16", "Jan-17", "Feb-17", "Mar-17", "Apr-17", "May-17", "Jun-17", "Jul-17", "Aug-17", "Sep-17", "Oct-17", "Nov-17", "Dec-17"],
    //     datasets: [
    //         {
    //             label: "My First dataset",
    //             fillColor: "#80b1d2",
    //             strokeColor: "#495259",
    //             pointColor: "#495259",
    //             pointStrokeColor: "#fff",
    //             pointHighlightFill: "#fff",
    //             pointHighlightStroke: "rgba(220,220,220,1)",
    //             data: [ 12474.00,  25515.00,  38272.50,  57408.75,  86113.13,  129169.69,  282558.69,  544934.62,  980882.31,  1471323.47,  1287408.04,  1351778.44,  1419367.36,  1490335.73,  1738725.02,  1825661.27,  1916944.33,  2012791.55,  3210402.52,  4710435.42,  6500400.88,  7475461.02]
    //         }
    //     ]
    // };

    // var net_rev_canvas = $("#net-rev").get(0).getContext("2d");

    // var orders_data = {
    //     labels: ["Jul-15", "Aug-15", "Sep-15", "Oct-15", "Nov-15", "Dec-15", "Jan-16", "Feb-16", "Mar-16", "Apr-16", "May-16", "Jun-16", "Jul-16", "Aug-16", "Sep-16", "Oct-16", "Nov-16", "Dec-16", "Jan-17", "Feb-17", "Mar-17", "Apr-17", "May-17", "Jun-17", "Jul-17", "Aug-17", "Sep-17", "Oct-17", "Nov-17", "Dec-17"],
    //     datasets: [
    //         {
    //             label: "My First dataset",
    //             fillColor: "#80b1d2",
    //             strokeColor: "#495259",
    //             pointColor: "#495259",
    //             pointStrokeColor: "#fff",
    //             pointHighlightFill: "#fff",
    //             pointHighlightStroke: "rgba(220,220,220,1)",
    //             data: [ 16, 41, 114, 330, 990, 1540, 1848, 2772, 4158, 8505, 12758, 19136, 28704, 43057, 80731, 121097, 217974, 326961, 343309, 360474, 378498, 397423, 463660, 486843, 511185, 536744, 738024, 848727, 1171243, 1346930]
    //         }
    //     ]
    // };

    // var orders_canvas = $("#orders").get(0).getContext("2d");
    
    var store_roadmap_data = {
        labels: ["Q4 2015", "Q1 2016", "Q2 20016", "Q3 2016", "Q4 2016"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "#80b1d2",
                strokeColor: "#495259",
                pointColor: "#495259",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [150, 250, 500, 1000, 5000]
            }
        ]
    };
    var store_roadmap_canvas = $("#store-roadmap").get(0).getContext("2d");


    var chart_orders = new CanvasJS.Chart("chartOrdersContainer",
    {
        animationEnabled: true,
        animationDuration: 2000,
        backgroundColor: false,
        toolTip: {
            backgroundColor: "#495259",
            borderThickness: 0,
            fontSize: 20,
            fontColor: "#ffffff",
            cornerRadius: 0,
            
        },

        axisX: {
            lineThickness: 1,
            gridThickness: 1,
            labelAngle: -40,
            interval: 1,
            labelFontSize: 12,
            lineColor: "#dddddd",
            gridColor: "#dddddd"
        },

        axisY: {
            lineThickness: 1,
            gridThickness: 1,
            lineColor: "#dddddd",
            gridColor: "#dddddd",
            labelFormatter: function ( e ) {
                return "$" + numFormater(e.value);  
            }  
        },

       data: [
      {
        type: "splineArea",
        color: "#80b1d2",
        markerSize: 8,
        markerColor: "#495259",
        dataPoints: [
            {y: 16, label: "Jul-15"},
            {y: 41, label: "Aug-15"},
            {y: 114, label: "Sep-15"},
            {y: 330, label: "Oct-15"},
            {y: 990, label: "Nov-15"},
            {y: 1540, label: "Dec-15"},
            {y: 1848, label: "Jan-16"},
            {y: 2772, label: "Feb-16"},
            {y: 4158, label: "Mar-16"},
            {y: 8505, label: "Apr-16"},
            {y: 12758, label: "May-16"},
            {y: 19136, label: "Jun-16"},
            {y: 28704, label: "Jul-16"},
            {y: 43057, label: "Aug-16"},
            {y: 80731, label: "Sep-16"},
            {y: 121097, label: "Oct-16"},
            {y: 217974, label: "Nov-16"},
            {y: 326961, label: "Dec-16"},
            {y: 343309, label: "Jan-17"},
            {y: 360474, label: "Feb-17"},
            {y: 378498, label: "Mar-17"},
            {y: 397423, label: "Apr-17"},
            {y: 463660, label: "May-17"},
            {y: 486843, label: "Jun-17"},
            {y: 511185, label: "Jul-17"},
            {y: 536744, label: "Aug-17"},
            {y: 738024, label: "Sep-17"},
            {y: 848727, label: "Oct-17"},
            {y: 1171243, label: "Nov-17"},
            {y: 1346930, label: "Dec-17"}
        ]
      }
      ]
    });


    var chart_net_rev = new CanvasJS.Chart("chartNetRevContainer",
    {
        animationEnabled: true,
        animationDuration: 2000,
        backgroundColor: false,
        toolTip: {
            backgroundColor: "#495259",
            borderThickness: 0,
            fontSize: 20,
            fontColor: "#ffffff",
            cornerRadius: 0,
            
        },

        axisX: {
            lineThickness: 1,
            gridThickness: 1,
            labelAngle: -40,
            interval: 1,
            labelFontSize: 12,
            lineColor: "#dddddd",
            gridColor: "#dddddd"
        },

        axisY: {
            lineThickness: 1,
            gridThickness: 1,
            lineColor: "#dddddd",
            gridColor: "#dddddd",
            labelFormatter: function ( e ) {
                return "$" + numFormater(e.value);  
            }  
        },
       data: [
      {
        type: "splineArea",
        color: "#80b1d2",
        markerSize: 8,
        markerColor: "#495259",
        dataPoints: [
            {y: 12474.00, label: "Mar-16"},
            {y: 25515.00, label: "Apr-16"},
            {y: 38272.50, label: "May-16"},
            {y: 57408.75, label: "Jun-16"},
            {y: 86113.13, label: "Jul-16"},
            {y: 129169.69, label: "Aug-16"},
            {y: 282558.69, label: "Sep-16"},
            {y: 544934.62, label: "Oct-16"},
            {y: 980882.31, label: "Nov-16"},
            {y: 1471323.47, label: "Dec-16"},
            {y: 1287408.04, label: "Jan-17"},
            {y: 1351778.44, label: "Feb-17"},
            {y: 1419367.36, label: "Mar-17"},
            {y: 1490335.73, label: "Apr-17"},
            {y: 1738725.02, label: "May-17"},
            {y: 1825661.27, label: "Jun-17"},
            {y: 1916944.33, label: "Jul-17"},
            {y: 2012791.55, label: "Aug-17"},
            {y: 3210402.52, label: "Sep-17"},
            {y: 4710435.42, label: "Oct-17"},
            {y: 6500400.88, label: "Nov-17"},
            {y: 7475461.02,  label: "Dec-17"}
        ]
      }
      ]
    });

    var chart_sales = new CanvasJS.Chart("chartSalesContainer",
    {
        animationEnabled: true,
        animationDuration: 2000,
        backgroundColor: false,
        toolTip: {
            backgroundColor: "#495259",
            borderThickness: 0,
            fontSize: 20,
            fontColor: "#ffffff",
            cornerRadius: 0,
            
        },

        axisX: {
            lineThickness: 1,
            gridThickness: 1,
            labelAngle: -40,
            interval: 1,
            labelFontSize: 12,
            lineColor: "#dddddd",
            gridColor: "#dddddd"
        },

        axisY: {
            lineThickness: 1,
            gridThickness: 1,
            //interval: 10,
            lineColor: "#dddddd",
            gridColor: "#dddddd",
            labelFormatter: function ( e ) {
                return "$" + numFormater(e.value);  
            }  
        },

       data: [
      {
        type: "splineArea",
        color: "#80b1d2",
        markerSize: 8,
        markerColor: "#495259",
        dataPoints: [
            {label: "Jul-15", y: 4846.03 },
            {label: "Aug-15", y: 7499.01 },
            {label: "Sep-15", y: 14793.48 },
            {label: "Oct-15", y: 52800.00 },
            {label: "Nov-15", y: 158400.00 },
            {label: "Dec-15", y: 261800.00 },
            {label: "Jan-16", y: 221760.00 },
            {label: "Feb-16", y: 332640.00 },
            {label: "Mar-16", y: 498960.00 },
            {label: "Apr-16", y: 1020600.00 },
            {label: "May-16", y: 1530900.00 },
            {label: "Jun-16", y: 2296350.00 },
            {label: "Jul-16", y: 3444525.00 },
            {label: "Aug-16", y: 5166787.50 },
            {label: "Sep-16", y: 11302347.66 },
            {label: "Oct-16", y: 21797384.77 },
            {label: "Nov-16", y: 39235292.58 },
            {label: "Dec-16", y: 58852938.87 },
            {label: "Jan-17", y: 42913601.26 },
            {label: "Feb-17", y: 45059281.32 },
            {label: "Mar-17", y: 47312245.39 },
            {label: "Apr-17", y: 49677857.66 },
            {label: "May-17", y: 57957500.60 },
            {label: "Jun-17", y: 60855375.63 },
            {label: "Jul-17", y: 63898144.41 },
            {label: "Aug-17", y: 67093051.63 },
            {label: "Sep-17", y: 107013417.35 },
            {label: "Oct-17", y: 157014514.08 },
            {label: "Nov-17", y: 216680029.43 },
            {label: "Dec-17", y: 249182033.84}
        ]
      }
      ]
    });

    
  

// ==============================================================
// Scroll Magic
// ==============================================================
    

    var onCenterController = new ScrollMagic.Controller();
    var onEnterController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter"}});
    var onLeaveController = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onLeave"}});
   
    var topline = new ScrollMagic.Scene({triggerElement: "#topline", duration: "100%"})
        .setTween(".intro .inner", {'top': -100, 'opacity': 0, ease: Linear.easeNone})
        .addTo(onEnterController);

    var rocket = new ScrollMagic.Scene({triggerElement: "#topline", duration: "100%"})
        .setTween(".rocket-cart", {'top': -1000, ease: Linear.easeNone})
        .addTo(onEnterController);

    var rocket2 = new ScrollMagic.Scene({triggerElement: ".ask", duration: "200%"})
        .setTween(".ask .cart", { 'left': '15%', ease: Linear.easeNone})
        .addTo(onEnterController);

    var moon = new ScrollMagic.Scene({triggerElement: ".ask", duration: "200%"})
        .setTween(".ask .moon", {'top': "40vh", ease: Linear.easeNone})
        .addTo(onEnterController);

    var title = new ScrollMagic.Scene({triggerElement: ".ask", duration: "200%"})
        .setTween(".ask .title", {'top': "-10vh", ease: Linear.easeNone})
        .addTo(onEnterController);

    var funds = new ScrollMagic.Scene({triggerElement: ".ask", duration: "200%"})
        .setTween(".ask .funds", {'top': "30vh", ease: Linear.easeNone})
        .addTo(onEnterController);

     var tech = new ScrollMagic.Scene({triggerElement: "#tech .cover"})
        .setTween("#tech .cover img", {'max-height': "300px"})
        .addTo(onCenterController);
// STATUS QUO
    // var statusquo = new ScrollMagic.Scene({triggerElement: ".status-quo"})
    //     .setClassToggle(".status-quo .cover-1", "current")
    //     .addTo(onLeaveController);

    // var statusquo_monitization = new ScrollMagic.Scene({triggerElement: ".status-quo .monitization"})
    //     .setClassToggle(".status-quo .cover-2", "current")
    //     .addTo(onCenterController);

    // var statusquo_data = new ScrollMagic.Scene({triggerElement: ".status-quo .data"})
    //     .setClassToggle(".status-quo .cover-3", "current")
    //     .addTo(onCenterController);

    // var statusquo_user_exp = new ScrollMagic.Scene({triggerElement: ".status-quo .user-exp"})
    //     .setClassToggle(".status-quo .cover-4", "current")
    //     .addTo(onCenterController);

    // var quo_conversion = new ScrollMagic.Scene({triggerElement: "#status-quo .conversions"})
    //      .on("start", function (event) {
    //         quo_conversions_chart = new Chart(quo_conversions_canvas).Doughnut(quo_conversions_data, {
    //         showTooltips: false,
    //        // responsive: true,
    //         segmentStrokeColor: "#ccd1d5"
    //         });
    //     })
    //     .addTo(onCenterController);

    // var affiliate = new ScrollMagic.Scene({triggerElement: "#status-quo .average-affiliate"})
    //      .on("start", function (event) {
    //         quo_affiliate_chart = new Chart(average_affiliate).Doughnut(quo_affiliate_data, {
    //         showTooltips: false,
    //         //responsive: true,
    //         segmentStrokeColor: "#ccd1d5"
    //         });
    //     })
    //     .addTo(onCenterController);

// THE PROBLEM
    var prob1 = new ScrollMagic.Scene({triggerElement: ".slide-theproblem"})
        .setClassToggle(".slide-theproblem .cover-1", "current")
        .addTo(onLeaveController);

    var prob2 = new ScrollMagic.Scene({triggerElement: ".slide-theproblem .trigger-2"})
        .setClassToggle(".slide-theproblem .cover-2", "current")
        .addTo(onCenterController);

    var prob3 = new ScrollMagic.Scene({triggerElement: ".slide-theproblem .trigger-3"})
        .setClassToggle(".slide-theproblem .cover-3", "current")
        .addTo(onCenterController);


    var accidental = new ScrollMagic.Scene({triggerElement: ".accidental-clicks"})
        .on("start", function (event) {
            startCount(accidental_clicks);
        })
        .addTo(onEnterController);

    var conversions_count = new ScrollMagic.Scene({triggerElement: "#conversions-1"})
        .on("start", function (event) {
            startCount(conversions_1);
        })
        .addTo(onEnterController);

    var conversions_count_2 = new ScrollMagic.Scene({triggerElement: "#conversions-2"})
        .on("start", function (event) {
            startCount(conversions_2);
        })
        .addTo(onEnterController);

     var comissions_count_1 = new ScrollMagic.Scene({triggerElement: "#comissions-1"})
        .on("start", function (event) {
            startCount(comissions_1);
        })
        .addTo(onEnterController);

     var comissions_count_2 = new ScrollMagic.Scene({triggerElement: "#comissions-2"})
        .on("start", function (event) {
            startCount(comissions_2);
        })
        .addTo(onEnterController);

    var clickthrough_count = new ScrollMagic.Scene({triggerElement: "#clickthrough"})
        .on("start", function (event) {
            startCount(clickthrough);
        })
        .addTo(onEnterController);

    var comissions2_count_1 = new ScrollMagic.Scene({triggerElement: "#comissions2-1"})
        .on("start", function (event) {
            startCount(comissions2_1);
        })
        .addTo(onEnterController);

     var comissions2_count_2 = new ScrollMagic.Scene({triggerElement: "#comissions2-2"})
        .on("start", function (event) {
            startCount(comissions2_2);
        })
        .addTo(onEnterController);

// THE MARKET
    var market = new ScrollMagic.Scene({triggerElement: ".slide-market"})
        .setClassToggle(".slide-market .cover-1", "current")
        .addTo(onLeaveController);

    var market = new ScrollMagic.Scene({triggerElement: ".slide-market .estimate"})
        .setClassToggle(".slide-market .estimate", "current")
        .on("start", function (event) {
            startCount(market_retail);
            startCount(market_travel);
            startCount(market_digital);
            startCount(market_tickets);
            startCount(market_total);
        })
        .addTo(onCenterController);

     var us_market = new ScrollMagic.Scene({triggerElement: ".us-market"})
        .on("start", function (event) {
            var us_market_chart = new Chart(us_market_canvas).Pie(us_market_data, {
                animationEasing: "easeInOutQuad",
                responsive: true,
                tooltipFontSize: 24,
                tooltipTemplate: "<%= label %>: $<%= value %>B",
                showTooltips: true,
                onAnimationComplete: function(){    
                    this.showTooltip(this.segments, true);          
                },
                
            });

            var us_market_legend = us_market_chart.generateLegend();
            $(".us-market-legend").html(us_market_legend);
        })
        .addTo(onCenterController);

        

// SUPPORTED STORES
     var store_roadmap_scene = new ScrollMagic.Scene({triggerElement: ".store-roadmap"})
        .on("start", function (event) {
            var store_roadmap_chart = new Chart(store_roadmap_canvas).Line(store_roadmap_data, {
                animationEasing: "easeInOutQuad",
                responsive: true,
                tooltipTemplate: "<%= value %>",
                showTooltips: true,
                onAnimationComplete: function(){    
                    this.showTooltip(this.datasets[0].points, true);          
                },
                tooltipEvents: []            
            });
        })
        .addTo(onCenterController);

// FINANCIALS
     var sales_scene = new ScrollMagic.Scene({triggerElement: ".sales"})
        .on("start", function (event) {
            chart_sales.render();
        })
        .addTo(onCenterController);

    var net_rev_scene = new ScrollMagic.Scene({triggerElement: ".net-rev"})
        .on("start", function (event) {
            chart_net_rev.render();
        })
        .addTo(onCenterController);

    var orders_scene = new ScrollMagic.Scene({triggerElement: ".orders"})
        .on("start", function (event) {
            chart_orders.render();
        })
        .addTo(onCenterController);

// THE BENIFITS
    // var benefits = new ScrollMagic.Scene({triggerElement: "#benefits"})
    //     .setClassToggle("#benefits .cover-1", "current")
    //     .addTo(onLeaveController);

    // var statusquo_monitization = new ScrollMagic.Scene({triggerElement: "#benefits .monitization"})
    //     .setClassToggle("#benefits .cover-2", "current")
    //     .addTo(onCenterController);

    // var benefits_data = new ScrollMagic.Scene({triggerElement: "#benefits .data"})
    //     .setClassToggle("#benefits .cover-3", "current")
    //     .addTo(onCenterController);

    // var benefits_user_exp = new ScrollMagic.Scene({triggerElement: "#benefits .user-exp"})
    //     .setClassToggle("#benefits .cover-4", "current")
    //     .addTo(onCenterController);

    // var bh_conversion = new ScrollMagic.Scene({triggerElement: "#benefits .conversions"})
    //      .on("start", function (event) {
    //         bh_conversions_chart = new Chart(bh_conversions_canvas).Doughnut(bh_conversions_data, {
    //         showTooltips: false,
    //         segmentStrokeColor: "#ccd1d5"
    //         });
    //     })
    //     .addTo(onCenterController);

    // var bh_commissions = new ScrollMagic.Scene({triggerElement: "#benefits .commissions"})
    //      .on("start", function (event) {
    //         bh_commissions_chart = new Chart(bh_commissions_canvas).Doughnut(bh_commissions_data, {
    //                 showTooltips: false,
    //                 tooltipTemplate: "<%= label %>",
    //                 showTooltips: true,
    //                 segmentStrokeColor: "#ccd1d5",
    //                 onAnimationComplete: function(){    
    //                   //  this.showTooltip(this.segments, true);          
    //                 },

    //         });
    //     })
    //     .addTo(onCenterController);


// THE FUTURE
    // var future1 = new ScrollMagic.Scene({triggerElement: ".slide-future"})
    //     .setClassToggle(".slide-future .cover-1", "current")
    //     .addTo(onLeaveController);

    // var future2 = new ScrollMagic.Scene({triggerElement: ".slide-future .trigger-2"})
    //     .setClassToggle(".slide-future .cover-2", "current")
    //     .addTo(onCenterController);


    var timline_1 = new ScrollMagic.Scene({triggerElement: ".timeline .trigger-1", offset: -200})
        .setClassToggle(".timeline .trigger-1 .cd-timeline-img, .timeline .trigger-1 .cd-timeline-content", "reveal")
        .addTo(onCenterController);

    var timline_2 = new ScrollMagic.Scene({triggerElement: ".timeline .trigger-2", offset: -200})
        .setClassToggle(".timeline .trigger-2 .cd-timeline-img, .timeline .trigger-2 .cd-timeline-content", "reveal")
        .addTo(onCenterController);

    var timline_3 = new ScrollMagic.Scene({triggerElement: ".timeline .trigger-3", offset: -200})
        .setClassToggle(".timeline .trigger-3 .cd-timeline-img, .timeline .trigger-3 .cd-timeline-content", "reveal")
        .addTo(onCenterController);

    var timline_4 = new ScrollMagic.Scene({triggerElement: ".timeline .trigger-4", offset: -200})
        .setClassToggle(".timeline .trigger-4 .cd-timeline-img, .timeline .trigger-4 .cd-timeline-content", "reveal")
        .addTo(onCenterController);

    var timline_5 = new ScrollMagic.Scene({triggerElement: ".timeline .trigger-5", offset: -200})
        .setClassToggle(".timeline .trigger-5 .cd-timeline-img, .timeline .trigger-5 .cd-timeline-content", "reveal")
        .addTo(onCenterController);

    var timline_6 = new ScrollMagic.Scene({triggerElement: ".timeline .trigger-6", offset: -200})
        .setClassToggle(".timeline .trigger-6 .cd-timeline-img, .timeline .trigger-6 .cd-timeline-content", "reveal")
        .addTo(onCenterController);


// THE DASH
    var dash = new ScrollMagic.Scene({triggerElement: ".slide-dash"})
        .setClassToggle(".slide-dash .cover-1", "current")
        .addTo(onLeaveController);

    // var dash_1 = new ScrollMagic.Scene({triggerElement: ".slide-dash .trigger-1"})
    //     .setClassToggle(".dash-1", "reveal")
    //     .addTo(onCenterController);

    // var dash_2 = new ScrollMagic.Scene({triggerElement: ".slide-dash .trigger-2"})
    //     .setClassToggle(".dash-2", "reveal")
    //     .addTo(onCenterController);

// THE BUSINESS MODEL
    var business_1 = new ScrollMagic.Scene({triggerElement: ".slide-business-model"})
        .setClassToggle(".slide-business-model .cover-1", "current")
        .addTo(onLeaveController);

    var business_2 = new ScrollMagic.Scene({triggerElement: ".slide-business-model .main", offset: 180})
        .setPin(".main")
        .addTo(onCenterController);

    var business_3 = new ScrollMagic.Scene({triggerElement: ".slide-business-model .trigger-1"})
        .setClassToggle(".item-1", "reveal")
        .addTo(onCenterController);

    var business_3_2 = new ScrollMagic.Scene({triggerElement: ".slide-business-model .trigger-1"})
        .setClassToggle(".slide-business-model .cover-2", "current")
        .addTo(onCenterController);

    var business_4 = new ScrollMagic.Scene({triggerElement: ".slide-business-model .trigger-2"})
        .setClassToggle(".item-2", "reveal")
        .addTo(onCenterController);

    var business_4_2 = new ScrollMagic.Scene({triggerElement: ".slide-business-model .trigger-2"})
        .setClassToggle(".slide-business-model .cover-3", "current")
        .addTo(onCenterController);

    var business_5 = new ScrollMagic.Scene({triggerElement: ".slide-business-model .trigger-3"})
        .setClassToggle(".item-3", "reveal")
        .addTo(onCenterController);

    var business_5_2 = new ScrollMagic.Scene({triggerElement: ".slide-business-model .trigger-3"})
        .setClassToggle(".slide-business-model .cover-4", "current")
        .addTo(onCenterController);



    // THE DASH
    // var tech = new ScrollMagic.Scene({triggerElement: ".slide-tech"})
    //     .setClassToggle(".slide-tech .cover-1", "current")
    //     .addTo(onLeaveController);

    // var tech_1 = new ScrollMagic.Scene({triggerElement: ".slide-tech .trigger-2"})
    //     .setClassToggle(".slide-tech .cover-2", "current")
    //     .addTo(onCenterController);

    // var tech_2 = new ScrollMagic.Scene({triggerElement: ".slide-tech .trigger-3"})
    //     .setClassToggle(".slide-tech .cover-3", "current")
    //     .addTo(onCenterController);

    // IP
    var ip_1 = new ScrollMagic.Scene({triggerElement: "#ip"})
        .setClassToggle("#ip .cover-1", "current")
        .addTo(onLeaveController);

    // var ip_2 = new ScrollMagic.Scene({triggerElement: "#ip .trigger-2"})
    //     .setClassToggle("#ip .cover-2", "current")
    //     .addTo(onCenterController);

    // THE STORES
    var stores = new ScrollMagic.Scene({triggerElement: ".slide-stores"})
        .setClassToggle(".slide-stores .cover-1", "current")
        .addTo(onLeaveController);
});








