function testDrive () {
    let data = [];

    function users(name, mail, phone) {
        const instance = {};
        instance.name = name;
        instance.mail = mail;
        instance.phone = phone;
        return {
            getName: () => instance.name,
            getMail: () => instance.mail,
            getPhone: () => instance.phone,

            setName: (value) => instance.name = value,
            setMail: (value) => instance.mail = value,
            setPhone: (value) => instance.phone = value,
        };
    }

    data[ids()] = users('Hristiyan','h.hristow.88@gmail.com','0877516565');
    console.log(data.id1.getName());
    console.log(data.id1.getMail());
    console.log(data.id1.getPhone());

    data['ids'] = users();
    data.id2.setName('Ivan');
    data.id2.setMail('i.van@abv/bg');
    data.id2.setPhone('0878781234');
    console.log(data.id2.getName());
    console.log(data.id2.getMail());
    console.log(data.id2.getPhone());

    let ids = function idCript() {
        return;
    }


}

testDrive();