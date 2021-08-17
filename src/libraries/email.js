var nodeoutlook = require('nodejs-nodemailer-outlook')

class Email {
    constructor() {
        //Credenciales por defecto que envian correos
        auth = {
            user: 'brandon14998@gmail.com',
            pass: 'ingprs56968'
        }

        //Listado de archivos adjuntados                                                                                                                                                                                                                                                                                            
        attachament = []

    }

    //Envia un correo
    sendmail(data , _exec) {
        nodeoutlook.sendEmail({
            ...data,
            auth: this.auth,
            from: this.auth.user,
            attachments: this.attachament,
            onError: (_err) => _exec(_err, null),
            onSuccess: (_result) => _exec(false, _result.accepted)
        })
    }

    //coloca las credenciales del usuario emisor del correo
    setCredentials(_email, _password) {
        this.auth.user = _email,
            this.auth.pass = _password
    }

    // coloca las credenciales del usuario loggeado
    setLocalCredentials() {

    }

    // adjunta un archivo
    attachFile(_filename, _content) {
        this.attachament.push({ filename: _filename, content: _content })
    }

    // adjunta un archivo con path 
    attachLocalFile(_filename, _path) {
        this.attachament.push({ filename: _filename, path: _path })
    }

    // adjunta un archivo de un buffer de memoria
    attachBuffer(_filename, _buffer) {
        this.attachament.push({ filename: _filename, content: _buffer })
    }

    // coloca un archivo de un stream de datos
    attachStream(_filename, _stream) {
        this.attachament.push({ filename: _filename, content: _stream })
    }

}

module.exports = Email