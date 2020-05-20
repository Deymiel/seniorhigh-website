db.collection('students').onSnapshot(snapshot => {
    const student = snapshot.docChanges()[0].doc.data()
    const id = snapshot.docChanges()[0].doc.id

    console.log(student);
})

const submitRequest = () => {

    const newStud = {
        last: $('#last_name').val(),
        middle: $('#middle_name').val(),
        first: $('#first_name').val(),
        birthDate: $('#birth_date').val(),
        birthPlace: $('#birth_place').val(),
        email: $('#email').val(),
        mobile: $('#mobile').val(),
        studNum: $('#student_number').val(),
        sex: getGender(),
        houseNum: $('#street').val(),
        brgy: $('#barangay').val(),
        city: $('#city').val(),
        zip: $('#zipcode').val(),
        citizenship: $('#citizenship').val(),
        gradeLevel: getLevel(),
        strand: getStrand()
    }


    if (dataIsOkay(newStud)) {
        console.log('data complete')
        console.log("Submitting to Firebase");
        db.collection('students').add(newStud).then(res => {

            alert('Your request has been submitted.')

            clearInput()

        }).catch((err) => alert("Submission Failed: " + err))
    } else {
        alert('Please make sure form is complete before submitting');
    }






}

const getGender = () => {
    let gender = "female";
    if (document.querySelector('input[id="male"]:checked')) {
        gender = "male";
    }
    return gender;
}

const getLevel = () => {
    let level = "11"
    if (document.querySelector('input[id="grade-12"]:checked')) {
        gender = "12";
    }
    return level
}

const getStrand = () => {
    let strand = ""
    if (document.querySelector('input[id="abm"]:checked')) {
        strand = "ABM";
    } else if (document.querySelector('input[id="gas"]:checked')) {
        strand = "GAS"
    } else if (document.querySelector('input[id="humms"]:checked')) {
        strand = "HUMMS"
    } else {
        strand = "STEM"
    }
    return strand
}

const clearInput = () => {

    $('#last_name').val(null)
    $('#middle_name').val(null)
    $('#first_name').val(null)
    $('#birth_date').val(null)
    $('#birth_place').val(null)
    $('#email').val(null)
    $('#mobile').val(null)
    $('#student_number').val(null)
    $('#street').val(null)
    $('#barangay').val(null)
    $('#city').val(null)
    $('#zipcode').val(null)
    $('#citizenship').val(null)
    $('#street').val(null)

}

const dataIsOkay = (data) => {
    if (data.last !== null && data.last !== "" &&
        data.middle !== null && data.middle !== "" &&
        data.first !== null && data.first !== "" &&
        data.birthDate !== null && data.birthDate !== "" &&
        data.birthPlace !== null && data.birthPlace !== "" &&
        data.email !== null && data.email !== "" &&
        data.mobile !== null && data.mobile !== "" &&
        data.studNum !== null && data.studNum !== "" &&
        data.houseNum !== null && data.houseNum !== "" &&
        data.brgy !== null && data.brgy !== "" &&
        data.city !== null && data.city !== "" &&
        data.zip !== null && data.zip !== "" &&
        data.citizenship !== null && data.citizenship !== ""
    ) {
        return true;
    } else {
        return false;
    }
}