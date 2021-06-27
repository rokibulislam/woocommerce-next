import Head from 'next/head'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Footer from '../components/Footer'


const DefaultLayout = props => {
    return (
        <>
        	<Head>
				{/* Import CSS for nprogress */}
				<link rel="stylesheet" type="text/css" href="/nprogress.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
				/>
			</Head>

            <div className="default__layout">
                <Header/>
                <Nav/>
                <div className="page-wrapper">{props.children}</div>
                <Footer/>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        
    }
}

export default DefaultLayout