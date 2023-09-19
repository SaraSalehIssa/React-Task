import classes from './MainFooter.module.css';

function MainFooter() {

    return <footer className={classes.footer}>
        <div className={classes.row}>
            <button className={classes.logoutButton} onClick={function GoToSignUpPage() {
                window.location = '/';
            }} type='button'>Logout</button>
        </div>
    </footer>
}

export {MainFooter};