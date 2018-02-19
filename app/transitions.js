export default function () {
  this.transition(
    this.hasClass('toLeft'),
    this.fromRoute('setup.index'),
    this.toRoute('setup.import'),
    this.use('toLeft'),
    this.reverse('toRight'),
  );
  this.transition(
    this.hasClass('toLeft'),
    this.fromRoute('setup'),
    this.toRoute('setup.index'),
    this.use('fade'),
    this.reverse('fade'),
  );
  this.transition(
    this.hasClass('toLeft'),
    this.fromRoute('setup.index'),
    this.toRoute('setup.backup'),
    this.use('toLeft'),
    this.reverse('toRight'),
  );
  this.transition(
    this.hasClass('toLeft'),
    this.fromRoute('setup.backup'),
    this.toRoute('setup.password'),
    this.use('toLeft'),
    this.reverse('toRight'),
  );
}
