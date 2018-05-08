/**
 * Created by Administrator on 2018/3/30.
 */

    $(function(){


    	
        $('#dowebok').fullpage({
            'sectionsColor':['#0da5d6', 'pink','#7BAABE', '#16BA9D', '#0DA5D6'],
            //loopTop:true,      
			'navigation':true,	

			
            afterLoad: function (link,index) {
                $('.section').removeClass('current');                         
                setTimeout(function () {
                    $('.section').eq(index-1).addClass('current');
                },100)

            }
         });
                    //    基本思路
    //    定义变量 记录当前播放的index
           var index=0;

        var isTransitionEnd=true;

    //    当左箭头被点击是
        $('.prev').click(function(){

            if(isTransitionEnd){
                index++;
                //选择 90deg
                var r=90*index;
                isTransitionEnd=false;
                $('li').css('transform','rotateX('+r+'deg)');

                $('li').each(function(index,item){
//                 设置动画的延迟间隔0.25秒
                    $(item).css('transition-delay',index*0.25+'s');
                });
            }
        });
// 下一张
    $('.next').click(function(){
//        如果上次过渡结束 ，执行下一次
        if(isTransitionEnd){
            //        索引值减小
            index--;
            //       选择 90deg
            var r=90*index;
            isTransitionEnd=false;

            $('li').css('transform','rotateX('+r+'deg)');

            $('li').each(function(index,item){
//                 设置动画的延迟间隔0.25秒
                $(item).css('transition-delay',index*0.25+'s');
                console.log($(item));
            });

        }

    });
//    只有最会一个li过渡结束才算 轮播图过渡结束
    $('li').eq(4).on('webkitTransitionEnd',function(){
        isTransitionEnd=true;
    })

    });
