describe('serialization', function() {
  it('should serialize a basic form', function() {
    // given
    var sf = new SuplerForm(container);
    sf.render(simple1.form1);

    // when
    var serialized = sf.getValue();

    // then
    serialized.should.deep.equal(simple1.obj1);
  });

  it('should serialize after changes', function() {
    // given
    var sf = new SuplerForm(container);
    sf.render(simple1.form1);

    // when
    byName('field1').val('v11');
    byName('field2').val('');
    byName('field3').val(15);
    byName('field4').prop('checked', function( i, val ) { return i === 0; });

    var serialized = sf.getValue();

    // then
    serialized.field1.should.equal('v11');
    serialized.field2.should.equal('');
    serialized.field3.should.equal(15);
    serialized.field4.should.equal(false);
  });

  it('should serialize a form with a list of subforms rendered as a table', function() {
    // given
    var sf = new SuplerForm(container);
    sf.render(complex1.form1table);

    // when
    var serialized = sf.getValue();

    // then
    serialized.should.deep.equal(complex1.obj1);
  });

  it('should serialize a form with a list of subforms rendered as a list', function() {
    // given
    var sf = new SuplerForm(container);
    sf.render(complex1.form1list);

    // when
    var serialized = sf.getValue();

    // then
    serialized.should.deep.equal(complex1.obj1);
  });

  it('should serialize a form with a single subform', function() {
    // given
    var sf = new SuplerForm(container);
    sf.render(complex2.form1);

    // when
    var serialized = sf.getValue();

    // then
    serialized.should.deep.equal(complex2.obj1);
  });
});
