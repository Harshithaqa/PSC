describe('PSCpageobjects', function() {
	var obj=  require("./JsObjectpage.js");
  var using=  require("jasmine-data-provider");
  var d=  require("./data.js");
  
  it('psc application', function() {
    obj.getURL();
   //obj.getURL3();
 
   },500000);
 

  using(d.Datadrivend, function (data, description) {
    it("Should add and remove the payment methods successfully", function() {
  
      browser.sleep(5000);

        var EC = protractor.ExpectedConditions;
        obj.email.sendKeys(data.email);
        obj.password.sendKeys(data.password1);
      obj.login.click().then(function(){
        
    
        browser.sleep(25000);
    
      });
      
    
        obj.cancel.click().then(function(){
            browser.sleep(8000);
          
            });
          
      
      
        
        obj.addcart.click().then(function(){
          browser.sleep(8000);
          
      });
      
      obj.amount.sendKeys(data.mealamount).then(function(){
          browser.sleep(1000);
          
        });
      obj.addtocartbutton.click().then(function(){
          browser.sleep(5000);
          
      });
      obj.clickoncart.click().then(function(){
        browser.sleep(5000);
        
    });
    obj.clickonselect.click().then(function(){
      browser.sleep(4000);
    });
    
    
    
    obj.continue.click().then(function(){
      browser.sleep(8000);
    });
    obj.paymentcheckbox.click().then(function(){
        browser.sleep(8000);
      });
      obj.makepayment.click().then(function(){
        browser.sleep(10000);
      });

      obj.rtdbutton.click().then(function(){
        browser.sleep(8000);
      });

    },200000);
});

using(d.Datadrivenmail, function (data, description) {
    it("Should navigate to account activation page", function() {
	//it('TS-'+description, function() {
		browser.waitForAngularEnabled(false);

	 browser.ignoreSynchronization = true;
	 browser.sleep(8000);

			obj.getURL3();
			browser.sleep(3000);

			obj.drop.click().then(function(){
				browser.sleep(2000);
			  
				 }); 
			obj.dropselect.click().then(function(){
					browser.sleep(2000);
				  
					 }); 
			obj.idselect.click().then(function(){
						browser.sleep(5000);
					  
						 }); 
			 obj.identer.sendKeys(data.id1).then(function(){
							browser.sleep(8000);
							}); 
			obj.mailset.click().then(function(){
								browser.sleep(30000);
							  
								 }); 

                                obj.transactionmail.click().then(function(){
                                               browser.sleep(10000);
                                               }); 

                                               expect(obj.readata.getText()).toContain("(Food Service)");
                                               browser.sleep(5000);

                               obj.psclink.click().then(function(){
                                                   browser.sleep(10000);
                                                 
                                                    }); 


				   

			},250000);


        });









        
    });



















