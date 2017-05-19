
var stuff = [{
  label: 'Administrator',
  children: [
    {label: 'Create User'},
    {label: 'Edit password'},
    {label: 'Schelude'}
  ]
},{
  label: 'Patients',
  selected: true,
  children: [
    {label: 'Appointment'},
    {label: 'Manage Patients'}
  ]
}];

var app = angular.module('bin', ['ivh.treeview', 'ngMaterial']);

app.config(function(ivhTreeviewOptionsProvider) {
 ivhTreeviewOptionsProvider.set({
   defaultSelectedState: false,
   validate: true,
   expandToDepth: -1,
   twistieCollapsedTpl: '<md-icon md-svg-icon="https://raw.githubusercontent.com/ankoh/mendeley-cache-client/master/app/assets/svg/material-icons/ic_chevron_right_black_24px.svg"></md-icon>',
   twistieExpandedTpl: '<md-icon md-svg-icon="https://raw.githubusercontent.com/ankoh/mendeley-cache-client/master/app/assets/svg/material-icons/ic_expand_more_black_24px.svg"></md-icon>',
   twistieLeafTpl: '<span style="cursor: default;">&#8192;&#8192;</span>'
 });
});

app.directive('mdBox', function(ivhTreeviewMgr) {
  return {
    restrict: 'AE',
    template: [
      '<span class="ascii-box">',
        '<span ng-show="node.selected" class="x"><md-checkbox style="min-height: 100%; line-height: 0" aria-label="checked" ng-checked="true"></md-checkbox></span>',
        '<span ng-show="node.__ivhTreeviewIndeterminate" class="y"><md-checkbox style="min-height: 100%; line-height: 0" aria-label="checked" ng-checked="false"></md-checkbox></span>',
        '<span ng-hide="node.selected || node.__ivhTreeviewIndeterminate"><md-checkbox style="min-height: 100%; line-height: 0" aria-label="checked" ng-checked="false"></md-checkbox></span>',
      '</span>',  
    ].join(''),
    link: function(scope, element, attrs) {
      element.on('click', function() {
        ivhTreeviewMgr.select(stuff, scope.node, !scope.node.selected);
        scope.$apply();
      });
    }
  };
});

app.controller('DemoCtrl', function() {
  this.stuff = stuff;
});