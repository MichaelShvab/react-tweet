import "../App.css";
import React, { useEffect } from "react"

export default function Profile(props) {
    const { profile, setProfile } = props

    useEffect(() => {
        localStorage.setItem("profile", JSON.stringify(profile));
    }, [profile]);

    function submitProfile(e) {
        e.preventDefault()
    }

    return (
        <>
            <div className="Textarea w-50">
                <h1 className="mb-3">
                    Profile
                </h1>
                <div className="d-flex flex-column">
                    <p className="m-1">
                        User Name
                    </p>
                    <form className="d-flex flex-column">
                        <input onChange={(e) => setProfile(e.target.value)} className="Textarea border border-light rounded-3 p-3"></input>
                        <button onSubmit={() => submitProfile()} className="button btn btn-primary mt-3">Save</button>
                    </form>
                </div>
            </div>
        </>
    )
}