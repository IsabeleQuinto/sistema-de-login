function addEmail() {
    const email = document.getElementById('email').value 
    const password = document.getElementById('password').value 

    if(email === 'admin@admin.com', password === '1234') {
        alert('Login feito com Sucesso')
    } else {
        alert('Seu Login Falhou')
    }
}