sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"movielens/html/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("movielens.html.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
	
	
		init: function () {
		
              
			// call the base component's init function
			sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
			
			
			// enable routing
			this.getRouter().initialize();
			


			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			this.getOwnerComponent.initialize();
			this.getTargets.initialize();
			this.getTargets().display("demo");
		},
	
	
		createContent:function(){
			var oView = sap.ui.view({
				id:"app",
				viewName:"ui5.view.App",
				type:"JS",
				viewData:{component:this}
			});
		}

	
	});
	
});