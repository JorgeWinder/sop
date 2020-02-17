document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);

  var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});
