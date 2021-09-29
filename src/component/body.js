import List from './list';
import Form from './form';

function Body() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-5 col-md-6">
                        <List />
                    </div>
                    <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                        <Form />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body