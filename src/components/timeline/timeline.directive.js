

require("./timeline.scss");


export default function timeline($timeout) {
    return {
        replace: false,
        restrict: 'E',
        templateUrl: require('./timeline.html'),
        link: function (scope, element, attr, ctrl) {
            console.log(attr);
            

            // $($(element).find(".timeline")).draggable({
            //     axis: 'x',
            //     drag: function (event, ui) {
            //        console.log(ui.position.left); 
                   
            //        if (ui.position.left > 0) {
            //            ui.position.left = 0;
            //        }
            //     },
            //     snap: ".timeline-box",
            //     snapMode: "outer"
            // });
            
            
            
            
            $($(element).find(".timeline-handle")).draggable({
                axis: 'x',
                drag: function (event, ui) {
                   console.log(ui.position.left); 
                   
                   //ui.position.left = Math.min(200, ui.position.left);
                   if (ui.position.left <= 0) {
                       ui.position.left = 0;
                   }
                },
                //snap: ".timeline-box",
                //snapMode: "outer"
            });
        },
        bindToController: {
            
        },
        controller: function (TimelineService) {
            let self = this;
            self.dates = TimelineService.dates;
        },
        controllerAs: 'timelineCtrl'
    };
}