import React from 'react';
import { useStateValue } from '../state/StateProvider';
import { RedditState, IDispatchAction } from '../state/types';
import { fetchFail, fetchStart, fetchSuccess } from '../state/actions';

const subredditDataDisplay = (state: RedditState) => {
  const redditSuccessData = state.fetchResult
    && state.fetchResult.success;

  const errorMsg = state.fetchResult
    && state.fetchResult.errorMsg;

  const dataDisplay = redditSuccessData && (
    <div>
      <div style={{marginBottom: '20px'}}>
        <label>Fetched At: {redditSuccessData.fetchedAt}</label>
      </div>
      <div>
        {
          redditSuccessData.subreddits.map((data) => (
            <div>
              <div>
                <label>Title: {data.title}</label>
              </div>
              <div>
                <label>URL: {data.url}</label>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );

  const errorDisplay = errorMsg && (
    <div>
      <label>Error: {errorMsg}</label>
    </div>
  );

  return (
    <div>
      {dataDisplay}
      {errorDisplay}
    </div>
  );
};

const fetchRedditData = async (dispatch: React.Dispatch<IDispatchAction>) => {
  dispatch(fetchStart());
  const res = await fetch('https://www.reddit.com/r/best.json?limit=10');

  if (res.ok) {
    const response = await res.json();
    const responsePayload = response.data.children.map((elemData: any) => ({
      title: elemData.data.title as string,
      url: elemData.data.url as string
    }));
    return dispatch(fetchSuccess(responsePayload));
  }

  dispatch(fetchFail('Fail to fetch data'));
}

export default () => {
  const ctx = useStateValue();
  const [state, dispatch] = ctx ? ctx.appContext : [null, null];

  return (
    state && dispatch &&
    <div>
      <button onClick={(event) => fetchRedditData(dispatch)}>Fetch on Reddit</button>
      {state.reddit.isFetching && <label>Fetching data...</label>}
      {subredditDataDisplay(state.reddit)}
    </div>
  );
}