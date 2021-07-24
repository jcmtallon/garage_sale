interface OwnProps {}

export const HomeBookButtonDialogForm = ({}: OwnProps) => {
  return (
    <div className="flex flex-col">
      <div>Top comment</div>
      <div className="bg-primary-50 flex flex-col">
        <div>Name</div>
        <div>Contact details</div>
        <div>Comments</div>
      </div>
    </div>
  );
};
