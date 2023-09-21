import { useNavigation } from "react-router-dom";

function SubmitButton({ text, type }) {
    const navigation = useNavigation();
    const isSubmitting = navigation.state ==='submitting'

    return (
        <button
            className="btn btn-primary btn-block"
            type={type}
            disabled={isSubmitting}
        >
            {
                isSubmitting ? <>
                    <span className="loading loading-spinner"></span>
                    sending...
                </>
                :
                ( text || 'submit')
            }
        </button>
    )
}
export default SubmitButton
