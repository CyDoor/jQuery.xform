jQuery.fn.extend({'xform':function(action){
  form = this[0];
  form.old_action=form.action,form.old_target=form.target,form.action=action;
  var iframe = jQuery('<iframe name=_'+(~~(Math.random()*1e5)+'_ style=display:none>'))[0];
  ($('body')[0]||$('html')[0]).appendChild(iframe);
  form.target=iframe.name;
  setTimeout(function(){
    $(iframe).bind('load',function(){
      form.action=form.old_action,form.target=form.old_target,form.onsubmit=null,form.submit();
    });
  },30);
}});