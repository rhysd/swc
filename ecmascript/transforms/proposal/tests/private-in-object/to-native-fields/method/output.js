var _brand_check_Foo = new WeakSet();
class Foo {
     #foo() {
    }
    test(other) {
        return _brand_check_Foo.has(other);
    }
    constructor(){
        _brand_check_Foo.add(this);
    }
}
