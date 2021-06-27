import { useState } from 'react'
import SearchForm from "./SearchForm";
const Header = props => {
    return (
        <header className="site__header" id="masthead">
            <div className="container">
				<div className="row header__wrap">
					<div className="header__left col-sm-6 col-xs-12">
                        Header
                    </div>
                    <div className="header__right col-sm-6 col-xs-12">
						<SearchForm />
					</div>
                </div>
            </div>
        </header>
    )
}

export default Header;