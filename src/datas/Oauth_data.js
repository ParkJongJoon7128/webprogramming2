// kakao
export const KAKAO_REST_KEY = "d4fdb7bf98bb5470f220cfdc3476ae16";
export const KAKAO_redirect_uri = "http://localhost:3000/";
export const KAKAO_client_id = KAKAO_REST_KEY;
export const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_KEY}&redirect_uri=${KAKAO_redirect_uri}&response_type=code`;


// google
export const GOOGLE_client_id = "409136550647-5gj5gitr95rful9ike2fr6m757ffhuc9.apps.googleusercontent.com";

// naver
export const NAVER_REST_KEY = "6ipVR2J7JIqpaTAcIWkW";
export const NAVER_redirect_uri = "http://localhost:3000/";
export const NAVER_client_id = NAVER_REST_KEY;
export const naverUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_client_id}&state=${false}&redirect_uri=${NAVER_redirect_uri}`;
