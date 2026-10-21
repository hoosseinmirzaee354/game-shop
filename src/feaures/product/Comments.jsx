import Button from "../../ui/Button.jsx";
import NewCommentBox from "./NewCommentBox.jsx";
import CommentBox from "./CommentBox.jsx";

function Comments() {
    return (
        <div className="w-10/11 min-h-50 relative bg-brand-2 rounded-lg flex flex-col items-center gap-4 px-5 pt-4 pb-10 mb-40 mt-10 ">

            <div className="w-full py-4 flex justify-between border-b border-c-brand-5">
                <h2 className='text-2xl font-semibold'>Comments</h2>
                <Button type='secondary'>New Comment</Button>
            </div>

            <section className="w-9/10 ">

                <CommentBox />
                <CommentBox />

            </section>

            <NewCommentBox />
        </div>
    );
}

export default Comments;