import Head from 'next/head'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const DefaultLayout = props => {
    return (
        <div>
            <Header/>
            <Nav/>
            <div className="page-wrapper">{props.children}</div>
            <Footer/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        
    }
}

export default DefaultLayout