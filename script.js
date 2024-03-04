$("document").ready(function() {
    let arrow1rotated=0;
    let arrow2rotated=0;
    let arrow3rotated=0;
    let producttabopened=0;
    let companytabopened=0;
    let connecttabopened=0;
    $("#hamburgerdiv").click(function() {
        $("#closediv").css('display','block');
        $("#hamburgerdiv").css('display','none')
        $("#navcontent").css('display','block')
    });
    $("#closediv").click(function() {
        $("#hamburgerdiv").css('display','block');
        $("#closediv").css('display','none')
        $("#navcontent").css('display','none')
    });
    $("#product_option,#product_option_desktop").click(function() {
        $("#product_sub_options_div,#product_sub_options_div_desktop").toggle();
        producttabopened=1-producttabopened;
        $("#company_sub_options_div,#company_sub_options_div_desktop").css('display','none')
        companytabopened=0;
        if(arrow2rotated==1) {
            $("#arrow_2,#arrow_2_desktop").toggleClass('arrow_rotate')
            $("#company_option_desktop").toggleClass('bright_font')
            arrow2rotated=0;
        }
        $("#connect_sub_options_div,#connect_sub_options_div_desktop").css('display','none')
        connecttabopened=0;
        if(arrow3rotated==1) {
            $("#arrow_3,#arrow_3_desktop").toggleClass('arrow_rotate')
            $("#connect_option_desktop").toggleClass('bright_font')
            arrow3rotated=0;
        }
        $("#arrow_1,#arrow_1_desktop").toggleClass('arrow_rotate')
        $("#product_option_desktop").toggleClass('bright_font')
        arrow1rotated=1-arrow1rotated;
        if(producttabopened||companytabopened||connecttabopened==1) {
            $("#login_signup_div,#hr1").css('display','none')
        }else {
            $("#login_signup_div,#hr1").css('display','block')
        }
    })
    $("#company_option,#company_option_desktop").click(function() {
        $("#company_sub_options_div,#company_sub_options_div_desktop").toggle();
        companytabopened=1-companytabopened;
        $("#product_sub_options_div,#product_sub_options_div_desktop").css('display','none')
        producttabopened=0;
        if(arrow1rotated==1) {
            $("#arrow_1,#arrow_1_desktop").toggleClass('arrow_rotate')
            $("#product_option_desktop").toggleClass('bright_font')
            arrow1rotated=0;
        }
        $("#connect_sub_options_div,#connect_sub_options_div_desktop").css('display','none')
        connecttabopened=0;
        if(arrow3rotated==1) {
            $("#arrow_3,#arrow_3_desktop").toggleClass('arrow_rotate')
            $("#connect_option_desktop").toggleClass('bright_font')
            arrow3rotated=0;
        }
        $("#arrow_2,#arrow_2_desktop").toggleClass('arrow_rotate')
        $("#company_option_desktop").toggleClass('bright_font')
        arrow2rotated=1-arrow2rotated;
        if(producttabopened||companytabopened||connecttabopened==1) {
            $("#login_signup_div,#hr1").css('display','none')
        }else {
            $("#login_signup_div,#hr1").css('display','block')
        }
    })
    $("#connect_option,#connect_option_desktop").click(function() {
        $("#connect_sub_options_div,#connect_sub_options_div_desktop").toggle();
        connecttabopened=1-connecttabopened;
        $("#product_sub_options_div,#product_sub_options_div_desktop").css('display','none')
        producttabopened=0;
        if(arrow1rotated==1) {
            $("#arrow_1,#arrow_1_desktop").toggleClass('arrow_rotate')
            $("#product_option_desktop").toggleClass('bright_font')
            arrow1rotated=0;
        }
        $("#company_sub_options_div,#company_sub_options_div_desktop").css('display','none')
        companytabopened=0;
        if(arrow2rotated==1) {
            $("#arrow_2,#arrow_2_desktop").toggleClass('arrow_rotate')
            $("#company_option_desktop").toggleClass('bright_font')
            arrow2rotated=0;
        }
        $("#arrow_3,#arrow_3_desktop").toggleClass('arrow_rotate')
        $("#connect_option_desktop").toggleClass('bright_font')
        arrow3rotated=1-arrow3rotated;
        if(producttabopened||companytabopened||connecttabopened==1) {
            $("#login_signup_div,#hr1").css('display','none')
        }else {
            $("#login_signup_div,#hr1").css('display','block')
        }
    })
    $("#header_div").click(function() {
        $("#product_sub_options_div,#product_sub_options_div_desktop").css('display','none')
        producttabopened=0;
        if(arrow1rotated==1) {
            $("#arrow_1,#arrow_1_desktop").toggleClass('arrow_rotate')
            $("#product_option_desktop").toggleClass('bright_font')
            arrow1rotated=0;
        }
        $("#connect_sub_options_div,#connect_sub_options_div_desktop").css('display','none')
        connecttabopened=0;
        if(arrow3rotated==1) {
            $("#arrow_3,#arrow_3_desktop").toggleClass('arrow_rotate')
            $("#connect_option_desktop").toggleClass('bright_font')
            arrow3rotated=0;
        }
        $("#company_sub_options_div,#company_sub_options_div_desktop").css('display','none')
        companytabopened=0;
        if(arrow2rotated==1) {
            $("#arrow_2,#arrow_2_desktop").toggleClass('arrow_rotate')
            $("#company_option_desktop").toggleClass('bright_font')
            arrow2rotated=0;
        }
    })
});