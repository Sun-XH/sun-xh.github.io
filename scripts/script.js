(function() {
  this.util = {
    hasField: function(obj, field, values) {
      var ovs;
      if (obj[field]) {
        ovs = obj[field];
        if (typeof ovs === 'string') {
          ovs = ovs.split(',');
        }
        if (!Array.isArray(values)) {
          values = [values];
        }
        return !values.every(function(v) {
          return ovs.indexOf(v) < 0;
        });
      }
      return false;
    },
    showPubs: function(field, values) {
      if (!Array.isArray(values)) {
        values = [values];
      }
      return $('.paper').each(function(x, i) {
        var d;
        d = $(this).data();
        if (util.hasField(d, field, values)) {
          return $(this).show();
        } else {
          return $(this).hide();
        }
      });
    },
    showAllPubs: function() {
      return $('.paper').each(function(x, i) {
        return $(this).show();
      });
    }
  };

}).call(this);
