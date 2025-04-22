var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  Tablet: function () {
    return navigator.userAgent.match(/Mobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
var ventana_ancho = $(window).width();
function butonMobile() {
  if (isMobile.any()) {
    $(".main-mobile-personas").remove();
    $(".dropDownClientes").hide();
    /*<div class="col-xs-6 text-center">
	 	  		<button class="btn btn-secondary hazteCliente" type="button" onclick="window.open()">
	 	  			
	 	  		</button>
	 	  </div>*/
    let mainMobile = `<div class="main-mobile-personas">
												<div class="container-fluid">
													 <div class="row ">
													 	  <div class="col-xs-6 text-center hazteClienteCol">
													 	  		<button class="btn btn-secondary hazteCliente" type="button" onclick="window.open()">
													 	  			
													 	  		</button>
													 	  </div>
													 	  <div class="col-xs-6 text-center entraBancoCol">
													 	  		<button class="btn btn-secondary entraBanco" type="button">
													 	  			
													 	  		</button>
													 	  </div>
													 </div>
												</div>
										</div>
				<div class="modal fade modal-fullscreen" id="botonesMainMobile" tabindex="-1" role="dialog" aria-hidden="true" style="border-radius: 0px;background: transparent;">
				    <div class="modal-dialog modal-dialog-centered" role="document" style="width: 100%%;border-radius: 0px;height: 100%;background: #ffffffc4;">
				        <div class="modal-content" style="height: auto;border-radius: 0px;background: #ffffff47;box-shadow: none;border: none;padding-top:45px;padding-bottom:45px;">
				        	<button type="button" class="close" data-dismiss="modal" aria-label="Close" style="top:5%;right:10%;">
				                <span aria-hidden="true">X</span>
				            </button>
				            <section class="pt-5 mt-5" style="padding-top:140px;">
								<div class="container-fluid">
									<div class="row mb-5 pb-5" style="margin-bottom: 30%;">
										<div class="col-xs-12 text-center">
									 		<h2 style="font-size:2.5rem;">Seleccione la opci&oacute;n</h2>
									 		<h2 style="font-size:2.5rem;">a la que desea ingresar</h2>  	
									 	</div>
									 	  
									</div>
									<div class="row">
										<div class="col-xs-12 text-center" style="margin-bottom:10%;">
									 	  		<button class="btn btn-secondary bt-balancPersonas" type="button" style="width:70%">
									 	  			Personas
									 	  		</button>
									 	  </div>
									 	  <div class="col-xs-12 text-center">
									 	  		<button class="btn btn-secondary bt-balancEmpresas"  type="button"  style="width:70%">
									 	  			Empresas
									 	  		</button>
									 	  </div>
									</div>
								</div>

							</section>
				        </div>
				    </div>
				</div>
				<style>
					.modal-fullscreen .modal-dialog {
					    width: 100%;
					    height: 100%;
					    margin: 0;
					    padding: 0;
					  }
					  
					.modal-fullscreen  .modal-content {
					    height: auto;
					    min-height: 100%;
					    border: 0 none;
					    border-radius: 0;
					    box-shadow: none;
					  }
				</style>`;
    $("body").append(mainMobile);

    $(".bt-balancPersonas").click(function () {
      let urlPostUrl = DATASIte.urlbalanceador;
      $.ajax({
        url: urlPostUrl,
        method: "POST",
        data: {
          id: 1,
        },
      })
        .done(function (data) {
          let urlPostUrl2 = "apis/url.php";
          $.ajax({
            url: urlPostUrl2,
            method: "POST",
            data: {
              url1: data.data[0].url1,
            },
          })
            .done(function (dataurl) {
              if (
                dataurl == "200" ||
                dataurl == "301" ||
                dataurl == "302" ||
                dataurl == "405"
              ) {
                window.location.href = data.data[0].url1;
              } else {
                let urlPostUrl2 = "apis/url.php";
                $.ajax({
                  url: urlPostUrl2,
                  method: "POST",
                  data: {
                    url1: data.data[0].url2,
                  },
                })
                  .done(function (dataurl2) {
                    if (
                      dataurl2 == "200" ||
                      dataurl2 == "301" ||
                      dataurl2 == "302" ||
                      dataurl2 == "405"
                    ) {
                      window.location.href = data.data[0].url2;
                    } else {
                      return false;
                    }
                  })
                  .fail(function (error) {
                    console.log("Error: ", error);
                  });
              }
            })
            .fail(function (error) {
              console.log("Error: ", error);
            });
        })
        .fail(function (error) {
          console.log("Error: ", error);
        });
    });
    $(".bt-balancEmpresas").click(function () {
      let urlPostUrl = DATASIte.urlbalanceador;
      $.ajax({
        url: urlPostUrl,
        method: "POST",
        data: {
          id: 2,
        },
      })
        .done(function (data) {
          let urlPostUrl2 = "apis/url.php";
          $.ajax({
            url: urlPostUrl2,
            method: "POST",
            data: {
              url1: data.data[0].url1,
            },
          })
            .done(function (dataurl) {
              if (
                dataurl == "200" ||
                dataurl == "301" ||
                dataurl == "302" ||
                dataurl == "405"
              ) {
                window.location.href = data.data[0].url1;
              } else {
                let urlPostUrl2 = "apis/url.php";
                $.ajax({
                  url: urlPostUrl2,
                  method: "POST",
                  data: {
                    url1: data.data[0].url2,
                  },
                })
                  .done(function (dataurl2) {
                    if (
                      dataurl2 == "200" ||
                      dataurl2 == "301" ||
                      dataurl2 == "302" ||
                      dataurl2 == "405"
                    ) {
                      window.location.href = data.data[0].url2;
                    } else {
                      return false;
                    }
                  })
                  .fail(function (error) {
                    console.log("Error: ", error);
                  });
              }
            })
            .fail(function (error) {
              console.log("Error: ", error);
            });
        })
        .fail(function (error) {
          console.log("Error: ", error);
        });
    });
    setTimeout(function () {
      let urlMenuPublicidad = DATASIte.urlpublicidad;
      $.ajax({
        url: urlMenuPublicidad,
        method: "POST",
        data: {},
      })
        .done(function (data) {
          $(".contentPublicidadMain").html("");
          if (data.data[0].textBtn1 == "") {
            $(".hazteClienteBtn .btn.btn-secondary").css("display", "none");
            $(".main-mobile-personas .hazteCliente").css("display", "none");
          } else {
            $(".hazteClienteBtn .btn.btn-secondary").html(
              data.data[0].textBtn1
            );
            $(".main-mobile-personas .hazteCliente").html(
              data.data[0].textBtn1
            );
            $("#dropdownMenuButton").html(
              data.data[0].textBtn2 + " <i class='fa fa-angle-down'></i>"
            );
            $(".hazteClienteBtn .btn.btn-secondary").attr(
              "onclick",
              "window.open('" + data.data[0].linkBtn1 + "')"
            );
            $(".main-mobile-personas .hazteCliente").attr(
              "onclick",
              "window.open('" + data.data[0].linkBtn1 + "')"
            );
          }
          if (data.data[0].textBtn2 == "") {
            $("#dropdownMenuButton").css("display", "none");
            $(".entraBanco").css("display", "none");
          } else {
            $("#dropdownMenuButton").html(data.data[0].textBtn2);
            $(".entraBanco").html(data.data[0].textBtn2);
          }

          if (data.data[0].id == 1) {
            var html = `<div class="row">
								<img src="${data.data[0].imagen1}">
							</div>`;
          } else if (data.data[0].id == 2) {
            var html = `<div class="row mb-3">
								<img src="${data.data[0].imagen1}">
							</div>
							<div class="row">
								<img src="${data.data[0].imagen2}">
							</div>`;
          } else {
            var html = `<div class="row mb-3">
								<img src="${data.data[0].imagen1}">
							</div>
							<div class="row mb-3">
								<img src="${data.data[0].imagen2}">
							</div>
							<div class="row">
								<img src="${data.data[0].imagen3}">
							</div>`;
          }
          $(".contentPublicidadMain").append(html);

          $("#main-navigation .content-form-search").html("");

          $(
            "#main-navigation .content-form-search"
          ).html(`<div role="search" method="get" id="searchform" action="" autocomplete="off">
					<label for="s">
						<i class="fa fa-search"></i>
					</label>
					<input type="text" value="" placeholder="Buscar" class="" id="s" />

				</div>
				<ul class="listSearch hide">
					<li>Pruebas de Buscador</li>
					<li>Pruebas de Buscador</li>
					<li>Pruebas de Buscador</li>
					<li>Pruebas de Buscador</li>
				</ul>`);

          $("#s").keypress(function (e) {
            var key = e.which;
            console.log($("#s").val().length);
            if ($("#s").val().length > 2) {
              let urlAllMenu = DATASIte.urlAllMenu;
              $.ajax({
                url: urlAllMenu,
                method: "POST",
                data: {
                  visible: 1,
                  parent: 0,
                  search: true,
                  searchPage: $("#s").val(),
                },
              })
                .done(function (data) {
                  if (data.code == "200") {
                    $(".listSearch").html("");
                    $(".listSearch").removeClass("hide");
                    data.data.forEach(function (value, i) {
                      var list = `<li onclick="window.location.href='${value.link}'">${value.name}</li>`;
                      $(".listSearch").append(list);
                    });
                  } else {
                    $(".listSearch").html("");
                    $(".listSearch").removeClass("hide");
                    var list = `<li>NO HAY REGISTROS PARA MOSTRAR</li>`;
                    $(".listSearch").append(list);
                  }
                })
                .fail(function (error) {
                  console.log("Error: ", error);
                });
            }
          });
        })
        .fail(function (error) {
          console.log("Error: ", error);
        });
    }, 500);
  }
}

var encabezado;
var preguntasFreq;
var noticias;
let arroUp = `<a id="back_to_top" class="button button_js sticky scroll animated invisible" href="javascript:void(0)" onclick="irA('home')">
		<img src="/flecha_1.png">
	</a>`;
$("body").append(arroUp);
function urlvalor(urlxml, urlxml2, urlxml3) {
  //asignar url a variable externa
  urlGestor = urlxml;
  urlAuto = urlxml2;
  urlSite = urlxml3;
}
$.ajax({
  async: false,
  type: "GET",
  url: "gestor/rutas/rutas.xml",
  dataType: "xml",
})
  .done(function (data) {
    $("config", data).each(function (i) {
      var urlxml =
        data.getElementsByTagName("gestor")[i].childNodes[0].nodeValue;
      var urlxml2 =
        data.getElementsByTagName("preapertura")[i].childNodes[0].nodeValue;
      var urlxml3 =
        data.getElementsByTagName("site")[i].childNodes[0].nodeValue;
      urlvalor(urlxml, urlxml2, urlxml3);
    });
  })
  .fail(function (error) {
    console.log("Error: ", error);
  });

var colorAnt = "rgb(239 148 62 / 84%)";
var mainAnt = "";
/*ARCHIVO PARA FUNCIONES PROPIAS DEL SISTEMA*/
//var url = ''
var totalItemsRedes = 0;
var oneVideo = 0;
/*if(location.host === "localhost:8888"){
  url = location.origin + "/100/gestor";
}else{
  url = location.origin+ "/gestor";
} */
var sliderInterval = 5000;
const DATASIte = {
  validaciones: {
    numeros:
      "abcdefghijklmnÃƒÂ±opqrstuvwxyzABCDEFGHIJKLMNÃƒâ€˜OPQRSTUVWXYZÃƒÂ¡ÃƒÂ©ÃƒÂ­ÃƒÂ³ÃƒÂºÃƒÂÃƒâ€°ÃƒÂÃƒâ€œÃƒÅ¡ÃƒÂ¼ÃƒÅ“ ",
    letras:
      "abcdefghijklmnopqrstuvwxyzÃƒÂ±ABCDEFGHIJKLMNÃƒâ€˜OPQRSTUVWXYZÃƒ ÃƒÂ¨ÃƒÂ¬ÃƒÂ²ÃƒÂ¹Ãƒâ‚¬ÃƒË†ÃƒÅ’Ãƒâ€™Ãƒâ„¢Ãƒâ€šÃƒÅ ÃƒÅ½Ãƒâ€Ãƒâ€º/[.*?^-_Ã‚Â¿!Ãƒâ€¡ÃƒÂ§#Ã‚Â¡${}()|[],'&",
    caract: new RegExp(
      /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    ),
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
  cintillos: urlGestor + "/apis/V1/cintillos.php",
};
jQuery(function ($) {
  butonMobile();
  $(window).bind("orientationchange", function (event) {
    $(".main-mobile-personas").remove();
    $("#botonesMainMobile").remove();

    butonMobile();
  });

  var urlPage = "";
  if (window.location.pathname.split("/").length == 3) {
    urlPage = window.location.pathname.split("/")[2];
  } else {
    urlPage = window.location.pathname.split("/")[1];
  }
  if (urlPage == "") {
    urlPage = "index.html";
  }
  let urlPageFind = DATASIte.urlgetPaginas;

  $("#searchText").blur(function () {
    alert("Busqueda");
    $("#searchform").submit();
  });
  $(".entraBanco").click(function () {
    $("#botonesMainMobile").modal("show");
    $("#botonesMainMobile").css("display", "flex");
    $("#botonesMainMobile").css("justify-content", "center");
    $("#botonesMainMobile").css("justify-content", "center");
  });

  $.ajax({
    url: urlPageFind,
    method: "POST",
    data: {
      link: urlPage,
    },
  })
    .done(function (data) {
      sessionStorage.pageId = data.data[0].id_page;
      var tipo_plantilla = data.data[0].tipo;

      var pageid = "";
      if (sessionStorage.pageId && sessionStorage.pageId != "") {
        pageid = sessionStorage.pageId;
      } else {
        pageid = 1;
      }
      if (pageid != 1) {
        $("#fp-nav").hide();
      }
      let getSliders = DATASIte.urlSlider;
      $.ajax({
        url: getSliders,
        method: "POST",
        data: {
          id_page: pageid,
          id_status: 1,
        },
      })

        .done(function (data) {
          if (data.data[0])
            sliderInterval = data.data[0].intervalSeg
              ? data.data[0].intervalSeg
              : 5000;
          let getSlidersImages = DATASIte.urlSliderImages;
          if (data.data[0]) {
            $.ajax({
              url: getSlidersImages,
              method: "POST",
              data: {
                id_slider: data.data[0].id_slider,
                id_status: 1,
              },
            })

              .done(function (dataImages) {
                var dots = `<ol class="carousel-indicators">`;
                var carouselSlider = `<div class="carousel-inner">`;
                var colorBtns = [];
                var videoOnline = false;
                if (dataImages.data.length == 1) {
                  oneVideo = 1;
                }
                dataImages.data.forEach(function (value, i) {
                  if (i == 0) var actives = "active";
                  else var actives = "";

                  dots += `<li class="${actives}" data-slide-to="${i}" data-target="#home-slider"></li>`;
                  var btnInfo = "";
                  if (value.mostrarBtn == 1) {
                    btnInfo = `<button class="hbtn-button-punto hb-fill-right-rev btnSlider${i}" onclick="window.open('${value.linkBtn}')" >
						        			${value.textoBtn}
						        		</button>
										<style>.btnSlider${i}:hover{color:${value.colorBtn} !important}</style>
									    <style>.btnSlider${i}::before{background:${value.colorBtn} !important}</style>
									    <style>.btnSlider${i}{border: 2px ${value.colorBtn} solid !important;}</style>`;
                    //colorBtns.push(value.colorBtn)
                  }

                  if (value.image.indexOf(".mp4") > -1) {
                    videoOnline = true;
                    carouselSlider += `<div class="item ${actives}" style="background-image: url('${urlGestor}/app-assets/images/sliders/${
                      value.image
                    }')">
										        	
										        	<video id="video-background${i}" class="video-background" preload="auto" autoplay="autoplay" loop="loop" muted="muted" width="100%">
													  <source src="${urlGestor}/app-assets/images/sliders/${
                      value.image
                    }" type='video/mp4;' />
													  <source src="${urlGestor}/app-assets/images/sliders/${
                      value.image
                    }" type='video/ogg;' />
													  <source src="${urlGestor}/app-assets/images/sliders/${
                      value.image
                    }" type='video/webm;' />
													  <p>tu navegador no soporta este formato</p>
													</video>
										        	<div class="col-sm-offset-1 caption caption-wide">
										        		${value.texto}
										        		
										        		${btnInfo}

										        	</div>
										        	<div class="content-controls">
													  <button onclick="optionVideo('play',${i})" class="play${i} controls" ${
                      dataImages.data.length == 1 ? 'style="display:none;"' : ""
                    }>
													  	<img src="img/play.png">
													  </button>
													  <button onclick="optionVideo('pause',${i})" class="pause${i} controls" ${
                      dataImages.data.length == 1 ? "" : 'style="display:none;"'
                    }>
													  	<img src="img/pausa.png">
													  </button>
													  <button onclick="optionVideo('mute',${i})" class="mute${i} controls" style="display:none;">
													  	<img src="img/audio_on.png">
													  </button>
													  <button onclick="optionVideo('sonar',${i})" class="sonar${i} controls" >
													  	<img src="img/audio_off.png">
													  </button>
													</div>
										        </div>`;
                  } else {
                    carouselSlider += `<div class="item ${actives}" style="background-image: url('${urlGestor}/app-assets/images/sliders/${value.image}')">
									        	<div class="col-sm-offset-1 caption caption-wide">
									        		${value.texto}
									        		
									        		${btnInfo}

									        	</div>
									        </div>`;
                  }
                });

                dots += `</ol>`;
                carouselSlider += `</div>`;

                $("#home-slider #fp-nav").after(dots + carouselSlider);
                /*for (var i = 0; i <= colorBtns.length; i++) {
									$('<style>.btnSlider' + i + ':hover{color:' + colorBtns[i] + ' !important}</style>').appendTo('.btnSlider' + i);
									$('<style>.btnSlider' + i + '::before{background:' + colorBtns[i] + ' !important}</style>').appendTo('.btnSlider' + i);
								}*/

                var slideHeight = $(window).height();
                /*if(location.href.indexOf('nomina')  > 0){
									slideHeight = '900px';
								}
								if(location.href.indexOf('creditos')  > 0){
									slideHeight = '900px';
								}*/

                $("#home-slider .item").css("height", slideHeight);
                setTimeout(function () {
                  $("#home-slider").carousel({
                    arrows: true,
                    pause: true,
                    interval: videoOnline ? false : sliderInterval,
                  });
                }, 1800);
              })
              .fail(function (error) {
                console.log("Error: ", error);
              });
          }
        })
        .fail(function (error) {
          console.log("Error: ", error);
        });

      let urlPostSections = DATASIte.urlSections;

      $.ajax({
        url: urlPostSections,
        method: "POST",
        data: {
          id_page: pageid,
          id_status: 1,
        },
      })
        .done(function (data) {
          let cintilloUrl = DATASIte.cintillos;
          $.ajax({
            url: cintilloUrl,
            method: "POST",
            data: {
              page: sessionStorage.pageId,
              searchPageCintillo: true,
            },
          })
            .done(function (data) {
              if (data.data.length > 0) {
                $(document).attr("title", data.data[0].title);
                let cintilloHtml = `<section id="cintillo" style="background: ${data.data[0].color};padding: 30px;">
																	   <div id="cintilloTwo" >
																	      <div class="container">
																	         <div class="row content-title">
																	            <div class="col-md-2 text-right col-sm-12 col-xs-12 logo-header">
																	               <img src="${data.data[0].imagen}" style="width:100px">	
																	            </div>
																	            <div class="col-md-7 col-sm-12 col-xs-12 text-header" style="padding-top:17px;">
																	               <h1 class="mb-2" style="color:white;font-size: 15px !important;margin-bottom:12px;text-transform:uppercase;    font-family: arial;">${data.data[0].title}</h1>
																	               <h2 style="color:white;font-size:30px;    font-family: arial;margin-bottom: 25px;">${data.data[0].subtitle}</h2>
																	            </div>
																	            <div class="col-md-3 col-sm-12 col-xs-12 button">
																	            </div>
																	         </div>
																	      </div>
																	   </div>
																	   <div style="    height: 0px;position: absolute;left: 50%;margin-left: -20px;z-index: 998;">
																	      <div class="img-arrow-down" style="
																	         position: relative;
																	         left: 50%;
																	         margin-left: -35px;
																	         width: 60px !important;
																	         top: -10px;
																	         ">
																	         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110" preserveAspectRatio="xMidYMid meet" width="65pt" height="65pt" version="1.0">
																	            <g fill="#000000" stroke="none" transform="translate(0 110) scale(0.1, -0.1)">
																	               <path id="rect3336" style="fill: ${data.data[0].color};" d="M 433 1055 c -144 -31 -285 -143 -348 -277 c -96 -201 -57 -428 99 -584 c 202 -202 520 -201 722 0 c 201 201 202 522 2 720 c -131 129 -299 179 -475 141 Z m -83 -511 c 11 -12 10 -18 -3 -32 c -16 -15 -18 -15 -33 0 c -19 18 -12 48 9 48 c 8 0 20 -7 27 -16 Z m 447 0 c 3 -8 -2 -23 -11 -32 c -15 -15 -17 -15 -33 0 c -13 14 -14 20 -3 32 c 16 20 39 20 47 0 Z m -387 -71 c 0 -22 -30 -27 -48 -9 c -16 16 -16 18 2 31 c 21 16 46 4 46 -22 Z m 330 22 c 10 -12 10 -18 0 -30 c -16 -19 -39 -19 -46 0 c -6 15 11 45 26 45 c 4 0 13 -7 20 -15 Z m -281 -58 c 8 -10 7 -19 -4 -33 c -13 -18 -15 -18 -31 -2 c -18 18 -13 48 9 48 c 8 0 20 -6 26 -13 Z m 228 -3 c 3 -8 -1 -22 -9 -30 c -13 -14 -17 -14 -32 1 c -13 13 -14 20 -5 31 c 15 19 38 18 46 -2 Z m -177 -49 c 15 -18 6 -45 -13 -45 c -8 0 -20 7 -27 15 c -10 12 -10 18 0 30 c 16 19 24 19 40 0 Z m 119 1 c 15 -18 3 -46 -19 -46 c -10 0 -21 7 -24 16 c -6 16 9 44 24 44 c 4 0 13 -6 19 -14 Z m -55 -55 c 14 -15 15 -24 6 -40 c -6 -12 -19 -21 -30 -21 c -11 0 -24 9 -30 21 c -9 16 -8 25 6 40 c 9 10 20 19 24 19 c 4 0 15 -9 24 -19 Z"></path>
																	            </g>
																	         </svg>
																	      </div>
																	   </div>
																	</section>`;

                if (isMobile.any()) {
                  if (data.data[0].mobile == 1) $("#home").after(cintilloHtml);
                } else {
                  if (data.data[0].web == 1) $("#home").after(cintilloHtml);
                }
              }
            })
            .fail(function (error) {
              console.log("Error: ", error);
            });
          if (data.code == "404") {
            console.log("Sin resultados");
          } else {
            var html = "";
            var htmlNavigation = "";
            var htmlCalendar = "";
            data.data.forEach(function (value, i) {
              console.log(value.typeSection);
              if (value.typeSection == "preguntasFreq") {
                preguntasFreq = 1;
              }
              if (value.typeSection == "infosvg") {
                encabezado = 1;
              }

              if (value.typeSection == "noticias") {
                noticias = 1;
              }

              if (value.typeSection == "reclamos") {
                getEstados();
              }

              if (value.typeSection == "balancesFinancieros") {
                getButtons();
              }
              if (value.typeSection == "memoriaYcuenta") {
                informes();
              }
              if (value.typeSection == "mapaAgencias") {
                Agencias();
              }
              var attrId = value.html_content.split('id="');
              attrId = value.html_content.split('"');
              if (attrId[1] != "marquee") {
                htmlNavigation += `<li>
											        	<a id="" href="javascript:void(0)" onclick="irA('${attrId[1]}')" class="${attrId[1]}Btn">
												        	<span class="fp-sr-only">${value.name_section}</span>
												        	<span></span>
												        </a>
												        <div class="fp-tooltip fp-right">${value.name_section}</div>
											        </li>`;
              }
              if (value.typeSection == "descargablesCalendarios") {
                htmlCalendar = `${value.html_content}`;
              } else {
                html += `${value.html_content}`;
              }

              if (value.typeSection == "flipbook") {
                var primer = value.html_content.split('id="contentPdfFlip"')[1];
                primer = value.html_content.split('value="');
                sessionStorage.pdfBook = primer[1].split('">')[0];
              }
              if (value.typeSection == "preguntasFreq") {
                $(
                  "<style>#faqs-nomina {display: block !important}</style>"
                ).append("#faqs-nomina");
                $(
                  "<style>#faqs-nomina {height:  520px; !important}</style>"
                ).append("#faqs-nomina");
                $(
                  "<style>#faqs-nomina {overflow-y: hidden !important}</style>"
                ).append("#faqs-nomina");
              }
              if (value.id_section == 10) {
                var prueba = document.getElementsByClassName(
                  "#pagomobil .box-izq, .box-der"
                );
              }
            });

            $("#fp-nav ul .firstIconNavigation").after(htmlNavigation);
            $("body").removeClass("cargando");
            $(".loading100").hide();

            $("#contentSections").append(html);
            if (htmlCalendar && htmlCalendar != "") {
              $(".downloadCalendar1").append(htmlCalendar);
            }

            var meses = new Array(
              "Enero",
              "Febrero",
              "Marzo",
              "Abril",
              "Mayo",
              "Junio",
              "Julio",
              "Agosto",
              "Septiembre",
              "Octubre",
              "Noviembre",
              "Diciembre"
            );
            var diasSemana = new Array(
              "Domingo",
              "Lunes",
              "Martes",
              "Mi\u00e9rcoles",
              "Jueves",
              "Viernes",
              "SÃƒÂ¡bado"
            );

            var f = new Date();

            if (f.getDate() < 10) var dia = "0" + f.getDate();
            else var dia = f.getDate();

            if (f.getMonth() + 1 < 10) var mes = f.getMonth() + parseInt(1);
            else var mes = f.getMonth() + 1;

            var fecha =
              diasSemana[f.getDay()] +
              " " +
              dia +
              "/" +
              mes +
              "/" +
              f.getFullYear();
            $("#dateMarque").html(
              diasSemana[f.getDay()] + " " + moment().format("DD/MM/YYYY")
            );
            $.ajax({
              url: DATASIte.getEventCalendar,
              method: "POST",
              data: {
                date: moment().format("YYYY/MM/DD"),
              },
            })
              .done(function (data) {
                if (data.data.length > 0 && data.data[0].evento) {
                  $("#contentTitleEvent").html(data.data[0].evento);
                } else {
                  $("#contentTitleEvent").html("");
                }
              })
              .fail(function (error) {
                console.log("Error: ", error);
              });
            //$("#contentTitleEvent").html();
            /*getEventCalendar*/

            $(".direction-top").remove();
            jQuery.each($("#contentSections img"), function () {
              $(this).attr("src", $(this).attr("src").replace("../../", ""));
              $(this).attr("src", $(this).attr("src").replace("../", ""));
              $(this).attr("alt", "100% Banco");
            });
            jQuery.each($("#contentSections section"), function () {
              let htmlSection = $(this)[0].outerHTML;

              htmlSection = htmlSection
                .replace("&quot;../", "")
                .replace("&quot;", "");

              htmlSection = htmlSection.replace("&quot;", "");

              htmlSection = htmlSection.replace("translateY", "");

              $(this)[0].outerHTML = htmlSection;
            });
            jQuery.each($("#contentSections .file-down>a"), function () {
              let htmlSection = $(this)[0].outerHTML;

              htmlSection = htmlSection.replace('target="_blank"', "download");

              $(this)[0].outerHTML = htmlSection;
            });
            jQuery.each($("#contentSections section a"), function () {
              console.log($(this).attr("href"));
            });
            var color_img = $("#second-section-nomina .background-nomina").css(
              "background-color"
            );

            $("#second-section-nomina .conten-image-nomina-requisitos").css(
              "background-color",
              color_img
            );
            $("#contactUsModal").css("display", "flex");
            $("#contactUsModal").css("justify-content", "center");
            $("#contactUsModal").css("justify-content", "center");

            if (preguntasFreq == 1) {
              $("#contentSections").append(
                `<script src="js/paginationfreq.min.js"></script><script src="js/preguntasfreq_scrolling.js"></script>`
              );
            }

            if (encabezado == 1) {
              if ($("#encabezado").length > 0) {
              } else {
                var html_cabezado = $("#canales section").html();
                var html_color = $("#canales").css("background");

                //$("#canales").css("background","red")
                var html_texto = $("#canales .container").html();
                var html_svg = $("#canales .img-arrow-down").html();

                $("#canales .container").remove();
                $("#canales .img-arrow-down").remove();

                $("#canales").attr("id", "encabezado");

                $("#encabezado ")
                  .prepend(`<div id="canales" style="background: ${html_color}">
														<div class="container">${html_texto}</div></div> 
														<div style="height: 0px;"><div class="img-arrow-down" style="position: relative;
														left: 50%;
														margin-left: -35px;
														width: 60px !important;
														top: -73px;"> ${html_svg}</div>
													</div>`);
              }
            }

            if (noticias == 1) {
              $("#contentSections").append(
                `<script src="js/paginationfreq.min.js"></script><script src="js/preguntasfreq_scrolling.js">`
              );
              $("body").css(
                "font-family",
                "Roboto-Regular, sans-serif !important"
              );
            }
            if (tipo_plantilla == "Scrolling") {
              $("#contentSections").append(
                `<script src="js/parallax-efecto4.js"></script>`
              );
            }
            $("marquee").css("width", "90%");

            $("#faqs .container div").first().removeClass("row");

            $(".panel").each(function (index) {
              for (var i = 0; i <= 300; i++) {
                $(this).removeClass("freq-" + i);
              }
              $(this).addClass("freq-" + index);
              $(".freq-" + index + ">div:first").attr("id", "heading-" + index);
              $("#heading-" + index).attr("href", "#collapse" + index);
              $("#heading-" + index + " .panel-title a").attr(
                "href",
                "#collapse" + index
              );
              $(".freq-" + index + ">div:last").attr("id", "collapse" + index);
            });

            $(".owl-testimonials").owlCarousel({
              singleItem: true,
              pagination: true,
            });
            $(".hbtn-button-icon.tablinks").click(function () {
              $(this).addClass("active");
            });

            $("#t_correo").blur(function () {
              var email = $(this).val();
              console.log(email);
              var caract = new RegExp(
                /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
              );

              if (caract.test(email) == false) {
                alert("Email no cumple con los parametros correctos");
              }
            });
            $("#r_email").blur(function () {
              var email = $(this).val();
              console.log(email);
              var caract = new RegExp(
                /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
              );

              if (caract.test(email) == false) {
                alert("Email no cumple con los parametros correctos");
              }
            });

            /*$("#fichero-muestra").change(function(){
												var fileName = $('#fichero-muestra').prop('files')[0].name;
											    var fileSize = $('#fichero-muestra').prop('files')[0].size;
											    var ext = fileName.split('.').pop();
											    console.log("CHANGE: ",fileSize)

											    if(fileSize > 5364108){
											    	alert('El archivo tiene un tamaño mayor al permitido.');
											    	return
											    }
											})*/
            $("#fichero-pdf").change(function () {
              var fileName = $("#fichero-pdf").prop("files")[0].name;
              var fileSize = $("#fichero-pdf").prop("files")[0].size;
              var ext = fileName.split(".").pop();
              if (fileSize > 5364108) {
                alert("El archivo tiene un tamaño mayor al permitido.");
                return;
              }
              if (ext != "pdf") {
                $("#div-enviar-pdf").addClass("hidden");
                $("#text-archivo").html("");
                alert("El archivo no tiene la extensión adecuada");
              } else {
                $("#text-archivo").html("");
                var porciones = $("#fichero-pdf")
                  .prop("files")[0]
                  .type.split("/");
                var apellido = $("#t_apellido").val();
                if (apellido == "") {
                  apellido = "Archivo";
                }
                $("#text-archivo").html(
                  `<p style="margin-top: 20px;"><strong style="color: rgb(0, 0, 0);">${apellido}.${porciones[1]} </strong><span class="delfileUpload">X</span></p>`
                );
                $("#div-enviar-pdf").removeClass("hidden");
                $(".delfileUpload").click(function () {
                  $("#text-archivo").html("");
                  $("#div-enviar-pdf").addClass("hidden");
                });
              }
              /*switch (ext) {
												    case 'pdf':
												        $('#div-fichero-pdf').addClass('hidden')
														$('#div-enviar-pdf').removeClass('hidden')
														$('#text-button').html('')
														$('#text-button').html('Enviar')
														$('#text-archivo').html('')
														$('#div-enviar-pdf1').remove()
														$('#div-fichero-pdf1').remove()
														$('#div-enviar-pdf').after(`<div id="div-fichero-pdf1" class="btn btn-default btn-primary fadeInUp wow subir-pdf"
																style="border-radius: 25px !important; margin-left: 10px !important;
																">
																<input type="file" id="fichero-pdf" class="input-file" value="" onchange="archivoCv()" accept=".pdf">
																<div class="" id="text-button">Subir CV</div>
															</div>`)



														var porciones = $('#fichero-pdf').prop('files')[0].type.split('/');
														var apellido = $('#t_apellido').val();
														if (apellido == '') {
															apellido = 'Archivo'
														}
														$('#text-archivo').html(`<p><strong style="color: rgb(0, 0, 0);">${apellido}.${porciones[1]} </strong><span class="delfileUpload">X</span></p>`)
														$('.delfileUpload').click(function(){
															$('#text-archivo').html('')
															$('#div-enviar-pdf').addClass('hidden')

														})
												      break;
												    default:
												      alert('El archivo no tiene la extensión adecuada');
												      break;
											    }*/
            });
          }
        })
        .fail(function (error) {
          console.log("Error: ", error);
        });
    })
    .fail(function (error) {
      console.log("Error: ", error);
    });

  let urlMenuPublicidad = DATASIte.urlpublicidad;
  $.ajax({
    url: urlMenuPublicidad,
    method: "POST",
    data: {},
  })
    .done(function (data) {
      console.log(data);
      $(".contentPublicidadMain").html("");
      if (data.data[0].textBtn1 == "") {
        $(".hazteClienteBtn .btn.btn-secondary").css("display", "none");
        $(".main-mobile-personas .hazteCliente").css("display", "none");
        $(".hazteClienteCol").remove();
      } else {
        $(".hazteClienteBtn .btn.btn-secondary").html(data.data[0].textBtn1);
        $(".main-mobile-personas .hazteCliente").html(data.data[0].textBtn1);
        $("#dropdownMenuButton").html(
          data.data[0].textBtn2 + " <i class='fa fa-angle-down'></i>"
        );
        $(".hazteClienteBtn .btn.btn-secondary").attr(
          "onclick",
          "window.open('" + data.data[0].linkBtn1 + "')"
        );
        $(".main-mobile-personas .hazteCliente").attr(
          "onclick",
          "window.open('" + data.data[0].linkBtn1 + "')"
        );
      }
      if (data.data[0].textBtn2 == "") {
        $(".entraBancoCol").remove();
        $("#dropdownMenuButton").css("display", "none");
        $(".entraBanco").css("display", "none");
      } else {
        $("#dropdownMenuButton").html(data.data[0].textBtn2);
        $(".entraBanco").html(data.data[0].textBtn2);
      }
      if (data.data[0].textBtn2 != "" && data.data[0].textBtn1 != "") {
        $(".entraBancoCol").removeClass("col-xs-12");
        $(".entraBancoCol").addClass("col-xs-6");
        $(".hazteClienteCol").removeClass("col-xs-12");
        $(".hazteClienteCol").addClass("col-xs-6");
      } else if (data.data[0].textBtn1 == "") {
        $(".entraBancoCol").removeClass("col-xs-6");
        $(".entraBancoCol").addClass("col-xs-12");
      } else {
        $(".hazteClienteCol").removeClass("col-xs-6");
        $(".hazteClienteCol").addClass("col-xs-12");
      }

      if (data.data[0].id == 1) {
        var html = `<div class="row">
						<img src="${data.data[0].imagen1}">
					</div>`;
      } else if (data.data[0].id == 2) {
        var html = `<div class="row mb-3">
						<img src="${data.data[0].imagen1}">
					</div>
					<div class="row">
						<img src="${data.data[0].imagen2}">
					</div>`;
      } else {
        var html = `<div class="row mb-3">
						<img src="${data.data[0].imagen1}">
					</div>
					<div class="row mb-3">
						<img src="${data.data[0].imagen2}">
					</div>
					<div class="row">
						<img src="${data.data[0].imagen3}">
					</div>`;
      }
      $(".contentPublicidadMain").append(html);

      $("#main-navigation .content-form-search").html("");

      $(
        "#main-navigation .content-form-search"
      ).html(`<div role="search" method="get" id="searchform" action="" autocomplete="off">
			<label for="s">
				<i class="fa fa-search"></i>
			</label>
			<input type="text" value="" placeholder="Buscar" class="" id="s" />

		</div>
		<ul class="listSearch hide">
			<li>Pruebas de Buscador</li>
			<li>Pruebas de Buscador</li>
			<li>Pruebas de Buscador</li>
			<li>Pruebas de Buscador</li>
		</ul>`);

      $("#s").keypress(function (e) {
        var key = e.which;
        console.log($("#s").val().length);
        if ($("#s").val().length > 2) {
          let urlAllMenu = DATASIte.urlAllMenu;
          $.ajax({
            url: urlAllMenu,
            method: "POST",
            data: {
              visible: 1,
              parent: 0,
              search: true,
              searchPage: $("#s").val(),
            },
          })
            .done(function (data) {
              if (data.code == "200") {
                $(".listSearch").html("");
                $(".listSearch").removeClass("hide");
                data.data.forEach(function (value, i) {
                  var list = `<li onclick="window.location.href='${value.link}'">${value.title}</li>`;
                  $(".listSearch").append(list);
                });
              } else {
                $(".listSearch").html("");
                $(".listSearch").removeClass("hide");
                var list = `<li>NO HAY REGISTROS PARA MOSTRAR</li>`;
                $(".listSearch").append(list);
              }
            })
            .fail(function (error) {
              console.log("Error: ", error);
            });
        }
      });
    })
    .fail(function (error) {
      console.log("Error: ", error);
    });

  let getGeneralRedesSociales = DATASIte.getGeneralRedesSociales;
  $.ajax({
    url: getGeneralRedesSociales,
    method: "POST",
    data: {},
  })
    .done(function (data) {
      var colorGeneral = data.data[0].color;
      //var urlImages = ''

      /*if(location.host === "localhost:8888"){
		  urlImages = location.origin + "/100/gestor";
		}else{
		  urlImages = location.origin + "/gestor";
		} */
      $(".textFooterRedes").html(data.data[0].nameInFooter);
      $(".textFooterRedes").css("color", data.data[0].colorTextRedes);
      if (data.data[0].statusFooter == 0) {
        $(".content-redes").hide();
      } else {
        let getGeneralRedesSocialesDetailFooter = DATASIte.getRedesSociales;
        $.ajax({
          url: getGeneralRedesSocialesDetailFooter,
          method: "POST",
          data: {
            status: 1,
          },
        })
          .done(function (data) {
            $(".content-redes").html("");
            var redesIconsFooter = "";

            data.data.forEach(function (value, i) {
              i = i + 1;

              redesIconsFooter += `<img src="http://gestor.100x100banco.com/app-assets/images/icon/${value.image}" onclick="window.open('${value.link}')" style="cursor:pointer;">`;
            });

            $(".content-redes").append(redesIconsFooter);
          })
          .fail(function (error) {
            console.log("Error: ", error);
          });
      }
      if (data.data[0].status == 0) {
        $(".icon-redes-home").hide();
      } else {
        let getGeneralRedesSocialesDetail = DATASIte.getRedesSociales;
        $.ajax({
          url: getGeneralRedesSocialesDetail,
          method: "POST",
          data: {
            status: 1,
          },
        })
          .done(function (data) {
            $(".background-redes").html("");
            $("#fp-nav .background-redes").css("background", colorGeneral);
            var redesIcons =
              '<img src="img/icons/bullet_iconos100x100_morado.png" class="close-redes" style="display: inline;">';

            data.data.forEach(function (value, i) {
              i = i + 1;
              totalItemsRedes++;
              redesIcons += `<img src="http://gestor.100x100banco.com/app-assets/images/icon/${value.image}" style="display: inline;" onclick="window.open('${value.link}')">`;
            });

            $(".background-redes").append(redesIcons);

            $(".close-redes").click(function () {
              $(".background-redes").removeClass("open");

              $(".background-redes img").hide("fade");
            });
          })
          .fail(function (error) {
            console.log("Error: ", error);
          });
      }
    })
    .fail(function (error) {
      console.log("Error: ", error);
    });
  let urlMenuPrincipal = DATASIte.urlMenu;
  $.ajax({
    url: urlMenuPrincipal,
    method: "POST",
    data: {
      visible: 1,
      parent: 0,
    },
  })
    .done(function (data) {
      var html = "";
      data.data.forEach(function (value, i) {
        if (value.link && value.link != "" && value.link != "null") {
          html += `<li class="">
					<a href="${value.link}">
						${value.nombre}
					</a>
				</li>`;
        } else {
          html += `<li class="">
					<a href="javascript:abrir(${value.id_menu},'${value.color}','${value.nombre}');">
						${value.nombre}
					</a>
				</li>`;
        }
      });
      $(".content-Main-section .list-inline").append(html);
    })
    .fail(function (error) {
      console.log("Error: ", error);
    });

  let urlMenuFooter = DATASIte.urlMenu;
  $.ajax({
    url: urlMenuFooter,
    method: "POST",
    data: {
      parent: 0,
      infooter: 1,
    },
  })
    .done(function (data) {
      data.data.forEach(function (value, i) {
        //$("#footer" + i).css('color', value.color)
        $("#footer" + i).html(value.nombre);

        $.ajax({
          url: urlMenuFooter,
          method: "POST",
          data: {
            parent: value.id_menu,
            infooter: 1,
          },
        }).done(function (dataSub) {
          if (dataSub.data.length > 0) {
            for (var iz = 0; iz < 12; iz++) {
              if (dataSub.data[iz]) {
                $(".footer" + i).append(
                  `<li onclick="window.open('${dataSub.data[iz].link}')">${dataSub.data[iz].nombre}</li>`
                );
              }
            }
          }
        });
      });
    })
    .fail(function (error) {
      console.log("Error: ", error);
    });
  //#main-slider
  var slideHeight = $(window).height();
  /*if(location.href.indexOf('nomina')  > 0){
		slideHeight = '900px';
	}
	if(location.href.indexOf('creditos')  > 0){
		slideHeight = '900px';
	}*/
  $("#home-slider .item").css("height", slideHeight);

  $(window).resize(function () {
    $("#home-slider .item").css("height", slideHeight);
  });

  let urlConfAccesos = DATASIte.getConfAccesosDirectos;
  $.ajax({
    url: urlConfAccesos,
    method: "POST",
    data: {},
  })
    .done(function (dataGeneral) {
      let getAccesosDirectos = DATASIte.getAccesosDirectos;
      $.ajax({
        url: getAccesosDirectos,
        method: "POST",
        data: {},
      })
        .done(function (data) {
          var linkAccesos = "";
          data.data.forEach(function (value, i) {
            i = 1 + i;
            // <img src="${urlGestor}/app-assets/images/icon/${value.image}">

            linkAccesos += `<div class="col-md-2 items-servicios" onclick="window.open('${value.link}')">
						        <img src="http://100x100banco.com/img/upload/acceso${i}.png">
				                <p class="text-0" style="">${value.nombre}</p>
				            </div>`;
          });
          var htmlAccesos = `<section id="servicios" class="background-color" style="background: ${dataGeneral.data[0].color}">
								    <div class="container">
								        <div class="row">`;
          htmlAccesos += linkAccesos;
          htmlAccesos += `		</div>
								    </div>
								    
								</section>`;

          setTimeout(function () {
            $(".sectionAccesos").append(htmlAccesos);
          }, 5000);
        })
        .fail(function (error) {
          console.log("Error: ", error);
        });
    })
    .fail(function (error) {
      console.log("Error: ", error);
    });
  let urlPostUrl = DATASIte.urlbalanceador;
  $.ajax({
    url: urlPostUrl,
    method: "POST",
    data: {},
  })
    .done(function (data) {})
    .fail(function (error) {
      console.log("Error: ", error);
    });
  //Scroll Menu
  $(window).on("scroll", function () {
    slideHeight = $(window).height();
    if ($(window).scrollTop() > slideHeight - 400) {
      $(".main-nav").addClass("main-nav-change");
    } else {
      $(".main-nav").removeClass("main-nav-change");
    }
    if ($(".nav-menu").hasClass("menu-open")) {
      cerrar();
    }
    $.each($("section"), function (index, action) {
      var element = $("#" + action.id);

      var visible = true;
      var windowTop = $(document).scrollTop();
      var windowBottom = windowTop + window.innerHeight;
      //var elementPositionTop = element.offset().top;
      //var elementPositionBottom = elementPositionTop + element.height();
      /*if (elementPositionTop >= windowBottom || elementPositionBottom <= windowTop) {
			}else{
				$("#fp-nav ul li a").removeClass("active")
				$("."+element[0].id+"Btn").addClass("active")
			}*/

      $("#" + action.id).bind(
        "inview",
        function (event, isInView, visiblePartX, visiblePartY) {
          if (isInView) {
            if (visiblePartY && visiblePartX) {
              if (visiblePartY == "both" || visiblePartY == "bottom") {
                $("." + element[0].id + "Btn").addClass("active");
              } else {
                $("." + element[0].id + "Btn").removeClass("active");
              }
            } else {
              $("." + element[0].id + "Btn").removeClass("active");
            }
          } else {
            $("." + element[0].id + "Btn").removeClass("active");
          }
          /*if (visible) {
				  
				}*/
        }
      );
    });
    $(".content-services").one("inview", function (event, visible) {
      if (visible) {
        $(".content-services-box.leftAnimated").removeClass("invisible");
        $(".content-services-box.leftAnimated").addClass("slideInLeft");
        $(".content-services-box.rightAnimated").removeClass("invisible");
        $(".content-services-box.rightAnimated").addClass("slideInRight");
      }
    });
    $("#datos").one("inview", function (event, visible) {
      if (visible) {
        $(".rightAnimated,.leftAnimated").removeClass("invisible");
        $(".leftAnimated").addClass("slideInLeft");
        $(".rightAnimated").addClass("slideInRight");
      }
    });
    $("#footer").one("inview", function (event, visible) {
      if (visible) {
        $(".button_js.sticky.scroll").removeClass("invisible");
        $(".button_js.sticky.scroll").addClass("bounce");
        $("#fp-nav ul li a").removeClass("active");
      } else {
        $(".button_js.sticky.scroll").addClass("invisible");
        $(".button_js.sticky.scroll").removeClass("bounce");
      }
    });
    $(".intro-tables").one("inview", function (event, visible) {
      if (visible) {
        $(".intro-table.left").removeClass("invisible");
        $(".intro-table.left").addClass("slideInRight");
        $(".intro-table.right").removeClass("invisible");
        $(".intro-table.right").addClass("slideInLeft");
      }
    });
  });
  $(".icon-redes-home").click(function () {
    /*var tam = 0
		$.each($(".background-redes img"), function (index, action) {
	        tam++ 
            
        });
		tam = tam * 50
		console.log(tam)
		$(".background-redes").css("width",tam+ "px !important")*/
    $(".background-redes").addClass("open");

    setTimeout(function () {
      $(".background-redes img").show("fade");
    }, 100);
  });

  // Navigation Scroll
  $(window).scroll(function (event) {
    Scroll();
    $(".background-redes").removeClass("open");
  });

  //menu active on click
  $(".toggle-menu").jPushMenu();

  //initlize onepagenav
  $("#main-navigation").onePageNav({
    filter: ":not(.external)",
  });

  $("#balancPersonas").click(function () {
    let urlPostUrl = DATASIte.urlbalanceador;
    $.ajax({
      url: urlPostUrl,
      method: "POST",
      data: {
        id: 1,
      },
    })
      .done(function (data) {
        let urlPostUrl2 = "apis/url.php";
        $.ajax({
          url: urlPostUrl2,
          method: "POST",
          data: {
            url1: data.data[0].url1,
          },
        })
          .done(function (dataurl) {
            if (
              dataurl == "200" ||
              dataurl == "301" ||
              dataurl == "302" ||
              dataurl == "405"
            ) {
              window.location.href = data.data[0].url1;
            } else {
              let urlPostUrl2 = "apis/url.php";
              $.ajax({
                url: urlPostUrl2,
                method: "POST",
                data: {
                  url1: data.data[0].url2,
                },
              })
                .done(function (dataurl2) {
                  if (
                    dataurl2 == "200" ||
                    dataurl2 == "301" ||
                    dataurl2 == "302" ||
                    dataurl2 == "405"
                  ) {
                    window.location.href = data.data[0].url2;
                  } else {
                    return false;
                  }
                })
                .fail(function (error) {
                  console.log("Error: ", error);
                });
            }
          })
          .fail(function (error) {
            console.log("Error: ", error);
          });
      })
      .fail(function (error) {
        console.log("Error: ", error);
      });
  });
  $("#balancEmpresas").click(function () {
    let urlPostUrl = DATASIte.urlbalanceador;
    $.ajax({
      url: urlPostUrl,
      method: "POST",
      data: {
        id: 2,
      },
    })
      .done(function (data) {
        let urlPostUrl2 = "apis/url.php";
        $.ajax({
          url: urlPostUrl2,
          method: "POST",
          data: {
            url1: data.data[0].url1,
          },
        })
          .done(function (dataurl) {
            if (
              dataurl == "200" ||
              dataurl == "301" ||
              dataurl == "302" ||
              dataurl == "405"
            ) {
              window.location.href = data.data[0].url1;
            } else {
              let urlPostUrl2 = "apis/url.php";
              $.ajax({
                url: urlPostUrl2,
                method: "POST",
                data: {
                  url1: data.data[0].url2,
                },
              })
                .done(function (dataurl2) {
                  if (
                    dataurl2 == "200" ||
                    dataurl2 == "301" ||
                    dataurl2 == "302" ||
                    dataurl2 == "405"
                  ) {
                    window.location.href = data.data[0].url2;
                  } else {
                    return false;
                  }
                })
                .fail(function (error) {
                  console.log("Error: ", error);
                });
            }
          })
          .fail(function (error) {
            console.log("Error: ", error);
          });
      })
      .fail(function (error) {
        console.log("Error: ", error);
      });
  });
  // User define function
  function Scroll() {
    var contentTop = [];
    var contentBottom = [];
    var winTop = $(window).scrollTop();
    var rangeTop = 80;
    var rangeBottom = 500;
    /*$('.nav-menu').find('a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})*/
    $.each(contentTop, function (i) {
      if (winTop > contentTop[i] - rangeTop) {
        $(".nav-menu li.scroll")
          .removeClass("current")
          .eq(i)
          .addClass("current");
      }
    });
  }

  //Initiat WOW JS
  new WOW().init();

  //smoothScroll
  smoothScroll.init();

  //Countdown
  $("#count-down").bind(
    "inview",
    function (event, visible, visiblePartX, visiblePartY) {
      if (visible) {
        $(this)
          .find(".counter")
          .each(function () {
            var $this = $(this);
            $({
              Counter: 0,
            }).animate(
              {
                Counter: $this.text(),
              },
              {
                duration: 2000,
                easing: "swing",
                step: function () {
                  $this.text(Math.ceil(this.Counter));
                },
              }
            );
          });
        $(this).unbind("inview");
      }
    }
  );

  $(".bx-slider").bxSlider({
    pager: false,
    nextSelector: "#slider-next",
    prevSelector: "#slider-prev",
    nextText: '<i class="fa fa-angle-right"></i>',
    prevText: '<i class="fa fa-angle-left"></i>',
  });
  $("#fp-nav ul li a")
    .mouseenter(function () {
      var elemento = $(this)[0].id;
      $(".fp-sr-only").hide();
      $("#" + elemento + " .fp-sr-only").show();
    })
    .mouseleave(function () {
      var elemento = $(this)[0].id;
      $(".fp-sr-only").hide();
      $("#" + elemento + " .fp-sr-only").hide();
    });

  //isotope
  $(window).load(function () {
    "use strict";
    var $achievment_selectors = $(".achievment-filter >li>a");
    var $achievment = $(".achievment-items");
    $achievment.isotope({
      itemSelector: ".achievment-item",
      layoutMode: "fitRows",
    });

    $achievment_selectors.on("click", function () {
      $achievment_selectors.removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr("data-filter");
      $achievment.isotope({
        filter: selector,
      });
      return false;
    });
  });

  $(".onlytext").on("keypress", function (event) {
    var regex = new RegExp(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/);
    var key = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  });
  $(".onlytextasunto").on("keypress", function (event) {
    var regex = new RegExp(/^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/);
    var key = String.fromCharCode(
      !event.charCode ? event.which : event.charCode
    );
    if (!regex.test(key)) {
      event.preventDefault();
      return false;
    }
  });
  $(".emailValid").on("blur", function (event) {
    var email = $(this).val();
    var caract = new RegExp(
      /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
    );

    if (caract.test(email) == false) {
      alert("Email no valido");

      return false;
    } else {
      return true;
    }
  });
});

function abrir(msj, colorMain, mainPrincipal) {
  colorAnt = colorMain;
  mainAnt = mainPrincipal;
  $(".nav-menu").css("background", colorMain);
  $(".four-main").remove();
  //var items = msj.split(',')
  $(".three-col").remove();
  /*$(".content-col-main .col-md-4").each(function(){
	    $(this).removeClass("col-md-4");
	    $(this).addClass("col-md-6");
	});*/
  let urlMenuPrincipal = DATASIte.urlMenu;
  $.ajax({
    url: urlMenuPrincipal,
    method: "POST",
    data: {
      visible: 1,
      parent: msj,
    },
  })
    .done(function (data) {
      html =
        '<a href="javascript:void(0)" style="color:#00d5eb" onclick="backMain()" class="backMainText">' +
        '<img src="img/flecha_2.png" style="width: 20px;margin-right: 15px;"><span>' +
        mainPrincipal +
        "</span></a>" +
        '<ul class="list-inline">';
      data.data.forEach(function (value, i) {
        html += `<li class=""><a href="javascript:void(0)" onclick='fourCol(\"${value.id_menu}\",\"${value.color}\",\"${value.nombre}\",\"${value.link}\")'>${value.nombre}</a></li>`;
      });
      html += "</ul>";
      $(".content-Main-section-two").html("");
      $(".content-Main-section-two").append(html);
      $(".content-Main-section").hide();
      $(".content-Main-section-two").show();
    })
    .fail(function (error) {
      console.log("Error: ", error);
    });
}

function backMain() {
  $(".content-Main-section li").removeClass("current");
  $(".backMainText span").html(mainAnt);
  if ($(".menu-open").hasClass("twosection")) {
    $(".menu-open").removeClass("twosection");
    $(".four-main").remove();
    $(".mainPrincipal").removeClass("col-md-4");
    $(".contentPublicidad").removeClass("col-md-4");
    $(".mainPrincipal").addClass("col-md-6");
    $(".contentPublicidad").addClass("col-md-6");
    $(".nav-menu").css("background", "#" + colorAnt);
  } else {
    $(".nav-menu").css("background", "rgb(239 148 62 / 84%)");
    $(".content-Main-section").show();
    $(".content-Main-section-two").hide();
  }
}

function cerrar(msj) {
  $(".listSearch").html("");
  $(".listSearch").addClass("hide");
  $("#s").val("");
  $(".nav-menu").css("background", "#ef943ee0");
  $(".jPushMenuBtn").click();
  $("#main-navigation").removeClass("twosection");
  $(".content-Main-section").show();
  $(".content-Main-section-two").hide();
  $(".four-main").remove();
  if ($(".content-col-main .col-md-4").length == 3) $(".three-col").remove();
  $(".list-inline li").removeClass("current");
  $(".content-col-main .col-md-4").each(function () {
    $(this).removeClass("col-md-4");
    $(this).addClass("col-md-6");
  });
}

function redirecPage(page) {
  window.location.href = page;
}

function irA(section) {
  if (section == "canales") {
    $("html,body").animate(
      {
        scrollTop: $("#" + section).offset().top - 200,
      },
      1200
    );
  } else {
    $("html,body").animate(
      {
        scrollTop: $("#" + section).offset().top,
      },
      1200
    );
  }
}

function fourCol(main, color, nombre, link) {
  if (main == "") {
    return;
  }
  if (isMobile.any()) $(".content-Main-section-two").hide("slow");

  $(".nav-menu").css("background", color);
  $(".mainFourText").remove();

  $(".backMainText span").html(
    $(".backMainText span").html() +
      ' <span class="mainFourText"> / ' +
      nombre +
      "</span>"
  );
  let urlMenuPrincipal = DATASIte.urlMenu;
  $.ajax({
    url: urlMenuPrincipal,
    method: "POST",
    data: {
      visible: 1,
      parent: main,
    },
  })
    .done(function (data) {
      html = '<ul class="list-inline">';
      html += '<li class=""><a href="' + link + '">' + nombre + "</a></li>";
      data.data.forEach(function (value, i) {
        if (value.link && value.link != "" && value.link != "null")
          var linkPage = value.link;
        else var linkPage = "javascript:void(0)";

        html += `<li class=""><a href="${linkPage}">${value.nombre}</a></li>`;
      });
      html += "</ul>";
      $(".content-col-main .col-md-6").each(function () {
        $(this).removeClass("col-md-6");
        $(this).addClass("col-md-4");
      });
      $("#main-navigation").addClass("twosection");
      if ($(".four-main").length > 0) {
        $(".four-main").html("");
        $(".four-main").append(html);
      } else {
        if (isMobile.any())
          $(".mainPrincipal").after(
            "<div class='col-md-4 four-main' style='margin-top:0px'>" +
              html +
              "</div>"
          );
        else
          $(".mainPrincipal").after(
            "<div class='col-md-4 four-main' style='margin-top:30px'>" +
              html +
              "</div>"
          );
      }

      $(".three-col").hide();
      $(".four-main").show();
      if (isMobile.any())
        $(".four-main").prepend(
          '<a href="javascript:void(0)" style="color:#00d5eb;font-size:16px;" onclick="backMain2()" class="backMainText"><img src="img/flecha_2.png" style="width: 20px;margin-right: 15px;">' +
            $(".backMainText span").html() +
            "</a>"
        );
    })
    .fail(function (error) {
      console.log("Error: ", error);
    });
}
function backMain2() {
  $(".four-main").remove();
  $(".content-Main-section-two").show();
}
function volverSecondMain() {
  $(".three-col").show();
  $(".four-main").remove();
}

function valemail(e) {}
function check(e) {
  tecla = document.all ? e.keyCode : e.which;

  //Tecla de retroceso para borrar, siempre la permite
  if (tecla == 8) {
    return true;
  }

  // Patrón de entrada, en este caso solo acepta numeros y letras
  patron = /[A-Za-z0-9]/;
  tecla_final = String.fromCharCode(tecla);
  return patron.test(tecla_final);
}
function changeTExt(ref) {
  $(".content-text-nomina").html(
    ref.find(".content-text-services-item").html()
  );
  var link = ref.find("input.link").val();
  $(".hbtn-button-credito.hb-fill-right-rev").attr(
    "onclick",
    'window.open("' + link + '")'
  );
}

function faqs(q) {
  if ($(q).hasClass("active")) {
    $(q).removeClass("active");
    return;
  } else {
    $(".panel-heading").removeClass("active");
    $(q).addClass("active");
  }
}

function abrirTabs(evt, content, icon, vertical) {
  // Declare all variables
  var i, tabcontent, tablinks, line, line2;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Get all elements with class="line" and remove the class "active"
  line = document.getElementsByClassName("line");
  for (i = 0; i < line.length; i++) {
    line[i].className = line[i].className.replace(" active", "");
  }

  // Get all elements with class="line2" and remove the class "active"
  line2 = document.getElementsByClassName("line2");
  for (i = 0; i < line2.length; i++) {
    line2[i].className = line2[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(content).style.display = "block";
  document.getElementById(icon).className += " active";
  document.getElementById(vertical).className += " active";
  evt.currentTarget.className += " active";
}

function optionVideo(accion, id) {
  switch (accion) {
    case "play":
      document.getElementById("video-background" + id).play();
      $(".pause" + id).show();
      $(".play" + id).hide();
      break;
    case "pause":
      document.getElementById("video-background" + id).pause();
      $(".pause" + id).hide();
      $(".play" + id).show();
      break;
    case "mute":
      document.getElementById("video-background" + id).muted = "muted";
      $(".mute" + id).hide();
      $(".sonar" + id).show();
      break;
    case "sonar":
      document.getElementById("video-background" + id).muted = "";
      $(".mute" + id).show();
      $(".sonar" + id).hide();
      break;
  }
}

function AddPanelBalance(data) {
  $(".cuadro_meses").append(data.content);
  /*setTimeout(function(){
		$("#menu-balances .anuales>a").click();
		$("#menu-balances .anuales>a").addClass('active');
	},1000)*/
  //$("#informes-" + anual).addClass("active");
}

function AddFileBalance(data, anual) {
  // console.time('loop');
  var contador = 1;

  data.forEach(function (value, i) {
    var clasebalance = "m" + contador + "-" + anual;

    // 		$(".m" + contador + "-" + anual).append(value.content.replaceAll('url_file_balance', urlSite + '/' + value.pdf_file))
    $(".m" + contador + "-" + anual).append(
      value.content.replaceAll("url_file_balance", value.pdf_file)
    );
    $(".m" + contador + "-" + anual + " #trigger").attr(
      "onclick",
      "pdfBalance('" + value.pdf_file + "', '" + clasebalance + "' )"
    );

    $(".m" + contador + "-" + anual).addClass(value.id);
    contador++;
  });
  setTimeout(function () {
    $("#menu-balances .anuales:first a").click();
    //$("#menu-balances .anuales:first a").addClass('active');
  }, 1000);
  var contador2 = 1;

  /*data.forEach(function (value, i) {
 	  console.log("Paso") 
		//$(".m" + contador2 + "-" + anual + ' .modal-content').append('<iframe src="" type="application/pdf" width="100%" height="650px"></iframe>')
		
		contador2++

 	});*/

  var contador = 0;
  // console.timeEnd('loop')
}

function pdfBalance(url, clase) {
  $("." + clase + " .modal-content" + " iframe").attr("src", url);
}

function getButtons() {
  //var dataSet = [];

  let urlPost = DATASIte.urlBalanceButtons;
  $.ajax({
    url: urlPost,
    method: "POST",
    data: {
      balance_buttons: 2,
    },
  })
    .done(function (data) {
      var n1 = 1;
      var n2 = 1;
      // var longitud = data.data.length;

      // if (longitud >= 1){
      //     $(".n1").append(`<div class="flex-item"><button id="left" disabled><img src="img/icons/iconsOrange1.png" class="img-fluid img-responsive"></button></div>`)

      // }

      data.data.forEach(function (value, i) {
        AddPanelBalance(value.months);
        AddFileBalance(value.files, value.anual);
        if (value.menu == 1) {
          if (n1 == 1) {
            $(".n1").append(
              `<div class="flex-item"><button id="left" disabled><img src="img/icons/iconsOrangeDis1.png" class="img-fluid img-responsive"></button></div>`
            );
          }
          $(".n1").append(value.content);
          if (n1 == 5) {
            $(".n1").append(
              `<div class="flex-item"><button id="right" onclick="ver(id,'menu1','menu2')"><img src="img/icons/iconsOrange.png" class="img-fluid img-responsive"></button></div>`
            );
          }
          //console.log(n1)
          n1 = n1 + 1;
        } else {
          if (n2 == 1) {
            $(".n2").append(
              `<div class="flex-item"><button id="left" onclick="ver(id,'menu2','menu1')"><img src="img/icons/iconsOrange1.png" class="img-fluid img-responsive"></button></div>`
            );
          }
          $(".n2").append(value.content);
          if (n2 == 5) {
            $(".n2").append(
              `<div class="flex-item"><button id="right" disabled><img src="img/icons/iconsOrangeDis.png" class="img-fluid img-responsive"></button></div>`
            );
          }
          //console.log(n2)
          n2 = n2 + 1;
        }
      });
      //$("#link1").addClass("active");
    })
    .fail(function (error) {
      console.log("Error: ", error);
    });
}

function informes() {
  var dataSet = [];
  let urlPost = DATASIte.urlInformePdf;
  ``;
  $.ajax({
    url: urlPost,
    method: "POST",
    data: {
      informes_pdf: 2,
    },
  })
    .done(function (data) {
      var n1 = 1;
      var n2 = 1;
      console.log(data);

      data.data.forEach(function (value, i) {
        $(".content-informe-financiero").append(
          value.content.replaceAll(
            "url_file_balance",
            urlSite + "/" + value.pdf_file
          )
        );
        if (value.semestre == 1) {
          var semestre = "I";
        } else {
          var semestre = "II";
        }

        //  $("." + semestre + "-" + value.anual).append(value.content.replaceAll('url_file_balance', urlSite + '/' + value.pdf_file))
      });
    })
    .fail(function (error) {
      console.log("Error: ", error);
    });
}

function getEstados() {
  let urlgetEstados = DATASIte.urlgetEstados;
  $.ajax({
    url: urlgetEstados,
    method: "POST",
    data: {
      contenido: 1,
    },
  })
    .done(function (data) {
      data.data.forEach(function (value, i) {
        $("#select-list-state").append(
          '<option value="' +
            value.edo_id +
            '">' +
            value.edo_descripcion +
            "</option>"
        );
      });
    })
    .fail(function (error) {
      console.log("Error: ", error);
    });
}

function Agencias() {
  var dataSet = [];
  let urlPost = DATASIte.urlgetAgencias;
  $.ajax({
    url: urlPost,
    method: "POST",
    data: {
      informes_pdf: 2,
    },
  })
    .done(function (data) {
      data.data.forEach(function (value, i) {
        if (value.content_html != "") {
          $("#script_agencia").append(
            '<script>$(".' +
              value.edo_class +
              '").click(function(){ var info= `' +
              value.content_html +
              '`; $(".cardmap-head h2").html(`Nuestras agencias en<br>' +
              value.edo_descripcion +
              '`); $(".panel-group").html(info); $(".edo").css("background-color", "var(--estado)");$(this).css("background-color", "var(--edoactivo)" ); if(isMobile.any()){ $("html,body").animate({ scrollTop: $(".cardmap").offset().top - 80 }, 1000); }})</script>'
          );
        } else {
          if (value.edo_class != "edo-dttocapital") {
            $("." + value.edo_class).addClass("hidden");
          }
        }
      });
    })
    .fail(function (error) {
      console.log("Error: ", error);
    });
}

function archivoCv() {
  return true;
  /*var fileName = $('#fichero-pdf').prop('files')[0].name;
    var fileSize = $('#fichero-pdf').prop('files')[0].size;
    var ext = fileName.split('.').pop();
    if(fileSize > 53641086){
    	alert('El archivo tiene un tamaño mayor al permitido.');
    	return
    }
    switch (ext) {
	    case 'pdf':
	        $('#div-fichero-pdf').addClass('hidden')
			$('#div-enviar-pdf').removeClass('hidden')
			$('#text-button').html('')
			$('#text-button').html('Enviar')
			$('#text-archivo').html('')
			$('#div-enviar-pdf1').remove()
			$('#div-fichero-pdf1').remove()
			$('#div-enviar-pdf').after(`<div id="div-fichero-pdf1" class="btn btn-default btn-primary fadeInUp wow subir-pdf"
					style="border-radius: 25px !important; margin-left: 10px !important;
					">
					<input type="file" id="fichero-pdf" class="input-file" value="" onchange="archivoCv()" accept=".pdf">
					<div class="" id="text-button">Subir CV</div>
				</div>`)



			var porciones = $('#fichero-pdf').prop('files')[0].type.split('/');
			var apellido = $('#t_apellido').val();
			if (apellido == '') {
				apellido = 'Archivo'
			}
			$('#text-archivo').html(`<p><strong style="color: rgb(0, 0, 0);">${apellido}.${porciones[1]} </strong><span class="delfileUpload">X</span></p>`)
			$('.delfileUpload').click(function(){
				$('#text-archivo').html('')
				$('#div-enviar-pdf').addClass('hidden')

			})
	      break;
	    default:
	      alert('El archivo no tiene la extensión adecuada');
	      break;
    }*/
}

function enviarCV() {
  if (
    $("#t_nombre").val() == "" ||
    $("#t_apellido").val() == "" ||
    $("#t_cedula").val() == "" ||
    $("#t_correo").val() == "" ||
    $("#t_telefono").val() == "" ||
    $("#t_info_adiccional").val() == ""
  ) {
    alert("Todos los datos son requeridos.");
    return;
  }
  var email = $("#t_correo").val();

  var caract = new RegExp(
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
  );

  if (caract.test(email) == false) {
    alert("Email no cumple con los parametros correctos");
    return;
  }

  $("#enviar-pdf").addClass("hidden");
  $("#text-archivo").html("");
  $("#text-archivo").html(
    `<p><strong style="color: rgb(0, 0, 0);">Enviando Archivo... </strong></p>`
  );

  var file_cv = $("#fichero-pdf").prop("files")[0];
  var fileName = $("#fichero-pdf").prop("files")[0].name;
  var fileSize = $("#fichero-pdf").prop("files")[0].size;
  var ext = fileName.split(".").pop();
  if (fileSize > 5364108) {
    alert("Se admiten ficheros PDF, con el tamaño de 5Mb");
    return;
  }
  var form_data = new FormData();
  form_data.append("file", file_cv);
  form_data.append("t_nombre", $("#t_nombre").val());
  form_data.append("t_apellido", $("#t_apellido").val());
  form_data.append("t_cedula", $("#t_cedula").val());
  form_data.append("t_correo", $("#t_correo").val());
  form_data.append("t_telefono", $("#t_telefono").val());
  form_data.append("t_red_social", $("#t_red_social").val());
  form_data.append("t_info_adiccional", $("#t_info_adiccional").val());
  form_data.append("correo", $("#correo-a-usar h1:first").html());
  form_data.append("pass", $("#correo-a-usar h1:last").html());

  let urlPost = DATASIte.urlupenviocv;
  $.ajax({
    url: urlPost,
    dataType: "json",
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    method: "POST",
  })
    .done(function (data) {
      console.log(data);
      if (data.data == "OK") {
        $("#text-archivo").html("");
        $("#text-archivo").html(
          `<p><strong style="color: rgb(0, 0, 0);">Archivo enviado </strong></p>`
        );

        setTimeout(function () {
          location.reload();
        }, 3000);
      }
    })
    .fail(function (error) {
      $("#enviar-pdf").removeClass("hidden");
      $("#text-archivo").html("");
      $("#text-archivo").html(
        `<p><strong style="color: rgb(0, 0, 0);">Archivo enviado</strong></p>`
      );
    });
}

function muestraFichero() {
  var fileName = $("#fichero-muestra").prop("files")[0].name;
  var fileSize = $("#fichero-muestra").prop("files")[0].size;
  var ext = fileName.split(".").pop();
  console.log("FUNCION: ", fileSize);
  if (fileSize > 5364108) {
    alert("Se admiten ficheros PDF, con el tamaño de 5Mb");
    return;
  }

  switch (ext) {
    case "pdf":
      $("#text-name-fichero").html("");
      $("#text-name-fichero").append(
        `${$("#fichero-muestra").prop("files")[0].name}`
      );
      break;
    case "jpg":
      $("#text-name-fichero").html("");
      $("#text-name-fichero").append(
        `${$("#fichero-muestra").prop("files")[0].name}`
      );
      break;
    case "png":
      $("#text-name-fichero").html("");
      $("#text-name-fichero").append(
        `${$("#fichero-muestra").prop("files")[0].name}`
      );
      break;
    default:
      alert("El archivo no tiene la extensión adecuada");
      break;
  }
}

function enviarReclamo() {
  if (
    $("#r_nombre").val() == "" ||
    $("#r_email").val() == "" ||
    $("#r_telefono").val() == "" ||
    $("#r_asunto").val() == "" ||
    $("#select-list-state").val() == "" ||
    $("#r_mensaje").val() == ""
  ) {
    $(".col-md-12.caption.caption-wide.contenButton p").html("");
    $(".col-md-12.caption.caption-wide.contenButton").append(
      `<p><strong style="color: rgb(0, 0, 0);"> Los datos marcados con (*) son requeridos.</strong></p>`
    );
    return;
  }
  var email = $("#r_email").val();

  var caract = new RegExp(
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
  );

  if (caract.test(email) == false) {
    alert("Email no cumple con los parametros correctos");
    return;
  }
  var fileName = $("#fichero-muestra").prop("files")[0].name;
  var fileSize = $("#fichero-muestra").prop("files")[0].size;
  var ext = fileName.split(".").pop();
  console.log("FUNCION: ", fileSize);
  if (fileSize > 5364108) {
    alert("Se admiten ficheros PDF, con el tamaño de 5Mb");
    return;
  }
  if (ext != "pdf") {
    alert("El archivo no tiene la extensión adecuada");
    return;
  }
  var file_reclamo = $("#fichero-muestra").prop("files")[0];
  var form_data = new FormData();
  form_data.append("file", file_reclamo);
  form_data.append("r_nombre", $("#r_nombre").get(0).value);
  form_data.append("r_email", $("#r_email").get(0).value);
  form_data.append("r_telefono", $("#r_telefono").get(0).value);
  form_data.append("r_asunto", $("#r_asunto").get(0).value);
  form_data.append("r_area", $("#select-list-state option:selected").html());
  form_data.append("r_mensaje", $("#r_mensaje").get(0).value);
  form_data.append("correo", $("#correo-a-usar h1:first").html());
  form_data.append("pass", $("#correo-a-usar h1:last").html());

  let urlPost = DATASIte.urlupreclamo;

  $.ajax({
    url: urlPost,
    dataType: "json",
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    method: "POST",
  })
    .done(function (data) {
      if (data.data == "OK") {
        $(".col-md-12.caption.caption-wide.contenButton").append(
          `<p><strong style="color: rgb(0, 0, 0);"> Correo enviado de manera exitosa.</strong></p>`
        );

        setTimeout(function () {
          location.reload();
        }, 3000);
      } else {
        $(".col-md-12.caption.caption-wide.contenButton").append(
          `<p><strong style="color: rgb(0, 0, 0);"> No se pudo envÃƒÂ­ar.</strong></p>`
        );

        setTimeout(function () {
          location.reload();
        }, 3000);
      }
    })
    .fail(function (error) {
      console.log("Error: ", error);
    });
}
/*var bPreguntar = true;
 
window.onbeforeunload = preguntarAntesDeSalir;
 
function preguntarAntesDeSalir()
{
  if (bPreguntar)
    return "¿Seguro que quieres salir?";
}*/
$("#s").keypress(function (e) {
  var key = e.which;
  if (key == 13) {
    // the enter key code
    let urlAllMenu = DATASIte.urlAllMenu;
    $.ajax({
      url: urlAllMenu,
      method: "POST",
      data: {
        visible: 1,
        parent: 0,
      },
    })
      .done(function (data) {
        var buscador;
        buscador = $("#s").val();
        if (buscador != "") {
          html = '<ul class="list-inline">';
          data.data.forEach(function (value, i) {
            if (value.link != "") {
              var nombre_minus = value.nombre;
              nombre_minus = nombre_minus.toLowerCase();
              if (nombre_minus.includes(buscador)) {
                if (value.link && value.link != "" && value.link != "null")
                  var linkPage = value.link;
                else var linkPage = "javascript:void(0)";

                html += `<li class=""><a href="${linkPage}">${value.nombre}</a></li>`;
              }
            }
          });
          html += "</ul>";
          $(".content-col-main .col-md-6").each(function () {
            $(this).removeClass("col-md-6");
            $(this).addClass("col-md-4");
          });
          $("#main-navigation").addClass("twosection");
          if ($(".four-main").length > 0) {
            $(".four-main").html("");
            $(".four-main").append(html);
          } else {
            $(".mainPrincipal").after(
              "<div class='col-md-4 four-main'>" + html + "</div>"
            );
          }

          $(".three-col").hide();
          $(".four-main").show();
        } else {
          backMain();
        }
      })
      .fail(function (error) {
        console.log("Error: ", error);
      });
  }
});
