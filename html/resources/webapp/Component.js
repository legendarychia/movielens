sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"movielens/html/model/models",
	"sap/ui/model/json/JSONModel",
	"jquery.sap.global",
	"sap/m/button",
	"sap/m/dialog",
	"sap/ui/core/mvc/Controller"
	
], function (UIComponent, Device, models,jquery,JSONModel,Button,dialog,Controller) {
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
			
			this.getTargets().display();
			this.getOwnerComponent().getModel();
		
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
		
			
	
		var oModel = new JSONModel(jquery.sap.getModulePath("movielens.html.model.config"));
		this.getView().setModel(oModel);
			
		},
				
			onExit: function() {
		      if (this._oDialog) {
		        this._oDialog.destroy();
		      }
		    },
		
		    getRouter: function() {
		      return sap.ui.core.UIComponent.getRouterFor(this);
		    },
		    
		  beginButton: new Button({
          text: 'Submit',
          enabled: true,
          press: function() {
            //Here I am calling the view
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.getTargets().display("xsodata.collaborative", {
              fromTarget: "demo"
            });
            dialog.close();
          }
        }),
        
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