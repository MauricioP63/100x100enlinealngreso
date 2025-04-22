// makes sure the whole site is loaded

jQuery(window)

        .load(function () {
            "use strict";
            // will first fade out the loading animation
            // jQuery(".status").fadeOut();
            // will fade out the whole DIV that covers the website.
const DATASIte = {
	validaciones: {
		numeros: "abcdefghijklmnÃ±opqrstuvwxyzABCDEFGHIJKLMNÃ‘OPQRSTUVWXYZÃ¡Ã©Ã­Ã³ÃºÃÃ‰ÃÃ“ÃšÃ¼Ãœ ",
		letras: "abcdefghijklmnopqrstuvwxyzÃ±ABCDEFGHIJKLMNÃ‘OPQRSTUVWXYZÃ Ã¨Ã¬Ã²Ã¹Ã€ÃˆÃŒÃ’Ã™Ã‚ÃŠÃŽÃ”Ã›/[.*?^-_Â¿!Ã‡Ã§#Â¡${}()|[],'&",
		caract: new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)
	},
	baseUrl: location.origin + location.pathname,
	baseHref: window.location.href,
	baseHash: location.hash,
	urlLogin: urlGestor + "/apis/V1/userLogin.php",
	urlUserList: urlGestor + "/apis/V1/user.php",
	urlMenu: urlGestor + "/apis/V1/menu.php",
	urlSlider: urlGestor + "/apis/V1/slider.php",
	urlSections: urlGestor + "/apis/V1/sections.php",
	urlbalanceador: urlGestor + "/apis/V1/conf_balanceador.php",
	urlbalanceadorLink: urlGestor + "/apis/V1/url.php",
	urlpublicidad: urlGestor + "/apis/V1/getpublicidad.php",
	confVentana: urlGestor + "/apis/V1/confVentana.php",
	confVentanaImages: urlGestor + "/apis/V1/confVentanaImages.php",
	getGeneralRedesSociales: urlGestor + "/apis/V1/getGeneralRedesSociales.php",
	getRedesSociales: urlGestor + "/apis/V1/getRedesSociales.php",
	urlSliderImages: urlGestor + "/apis/V1/urlSliderImages.php",
	getConfAccesosDirectos: urlGestor + "/apis/V1/getGeneralAccesosDirectos.php",
	getAccesosDirectos: urlGestor + "/apis/V1/getAccesosDirectos.php",
	getEventCalendar: urlGestor + "/apis/V1/getEventCalendar.php",
	getGeneralFooter: urlGestor + "/apis/V1/confgeneralFoorer.php",
	urlgetPaginas: urlGestor + "/apis/V1/getPages.php",
	urlBalanceButtons: urlGestor + "/apis/V1/balancesbuttons.php",
	urlInformePdf: urlGestor + "/apis/V1/informePdf.php",
	urlgetAgencias: urlGestor + "/apis/V1/getAgency.php",
	urlupreclamo: urlGestor + "/apis/V1/upReclamo.php",
	urlupenviocv: urlGestor + "/apis/V1/upCV.php",
	urlgetEstados: urlGestor + "/apis/V1/getEstados.php",
	urlAllMenu: urlGestor + "/apis/V1/allmenu.php",

};


            let urlconfVentana = DATASIte.confVentana;
            $.ajax({
              url: urlconfVentana,
              method: "GET",
              data: {
                 
              }
            })
            
            .done(function(data) {

                setTimeout(function(){ 
                    
                    $("#contentSections").show()
                    $(".sectionAccesos").show()
                    $("#footer").show()
                    
                    /*var pantallablanca = document.getElementById('pantalla-blanca');
                    pantallablanca.className = pantallablanca.className.replace("loader-active", "");
                    pantallablanca.className += " loader-inactive";*/
                    document.body.className = document.body.className.replace("loader-running", "");
                    document.body.className += " loader-done";
                    // jQuery("#contactUsModal").modal("show"); 
                }, 500);

                
                if(data.data[0].status == 1){
                    $('.modal-content .close').css('background',data.data[0].colorBtn)
                    setTimeout(function(){ 
                        $.ajax({
                          url: DATASIte.confVentanaImages,
                          method: "POST",
                          data: {
                            status: 1
                          }
                        })
                        .done(function(dataventa) {
                        
                        
                            var bullet = '<ol class="carousel-indicators">'
                            var sliders = '<div class="carousel-inner">'
                            /*var urlSlider = ''
                            if(location.host === "localhost:8888"){
                                urlSlider = location.origin + "/100/gestor";
                            }else if(location.host === "10.10.90.112:81" || location.host === "localhost:81"){
                                urlSlider = location.origin + "/prototipo/gestor";
                            }else{
                                urlSlider = location.origin + "/gestor";
                            }*/
                            dataventa.data.forEach(function(value, i) {
                                if(i === 0)
                                    var active = 'active'
                                else
                                    var active = ''

                                bullet += `<li class="${active}" data-slide-to="${i}" data-target="#home-slider-emergente"></li>`
                                if(value.link != '')
                                    var link = `onclick="window.open('${value.link}')"`
                                else
                                    var link = ``

                                sliders += `<div class="item ${active}" style="background-image: url(${urlGestor}/app-assets/images/${value.imagen});height:450px;background-size: 100% 100%;" ${link}>
                                                <div class="col-sm-offset-1 caption caption-wide">
                                                    

                                                </div>
                                            </div>` 
                            });
                            bullet += '</ol>'
                            sliders += '</div>'
                            $('#contactUsModal #home-slider-emergente').append(/*bullet+*/sliders);
                            $('#contactUsModal #home-slider-emergente').carousel({
                              interval: 10000,
                              arrows: true

                            });

                        })
                        .fail(function(error) {
                          console.log("Error: ",error)
                        });
                        $('#contactUsModal #home-slider-emergente .item').css('height','70%');
                        jQuery("#contactUsModal").modal("show"); 
                        
                        // jQuery(".preloader").delay(1000).fadeOut("swing");
                        // jQuery(".status").fadeOut();
                       

                    }, 1500);
                } else {
                    jQuery("#contactUsModal").remove();
                }
                $.ajax({
                  url: DATASIte.getGeneralFooter,
                  method: "POST",
                  data: {
                      
                  }
                })
                .done(function(dataFooter) {
                    
                    $(".footerContent").css("background",dataFooter.data[0].color+" !important")
                    $("#footer .container").css("background",dataFooter.data[0].color+" !important")
                    $('<style>#footer .container{background:'+dataFooter.data[0].color+' !important}</style>').appendTo('#footer .container');
                    $(".redes .first-ul").append(dataFooter.data[0].link)
                    $(".copyright-content").html(dataFooter.data[0].textoLogo)
                    $(".content-footer-link.info img").attr('src',urlGestor+"/app-assets/images/logo/"+dataFooter.data[0].logo)
                    
                })
                .fail(function(error) {
                  console.log("Error: ",error)
                });
            })
            .fail(function(error) {
              console.log("Error: ",error)
            });
            
			
			


        })