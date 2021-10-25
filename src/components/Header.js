import '../css/header.css'

function Header ({letraPerfil, nome}){
    return (
        <header className="header">
            <div className="identificador-perfil">
                <div className="bolaPerfilUsuario">
                    {letraPerfil}
                </div>
                <div>
                    {nome}
                </div>
            </div>
        </header>
    )
}
export default Header;