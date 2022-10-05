import "./Search.scss"

function Search() {
    return (
        <div className="search">
            <div className="search__container">
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="search--icon">
                    <path d="M20.71 19.29L17 15.61C18.4401 13.8144 19.1375 11.5353 18.9488 9.24133C18.7601 6.94733 17.6997 4.81281 15.9855 3.27667C14.2714 1.74053 12.0338 0.919537 9.73292 0.982497C7.43203 1.04546 5.24272 1.98759 3.61514 3.61517C1.98756 5.24275 1.04543 7.43207 0.982466 9.73295C0.919506 12.0338 1.7405 14.2714 3.27664 15.9855C4.81278 17.6997 6.9473 18.7601 9.2413 18.9488C11.5353 19.1375 13.8144 18.4401 15.61 17L19.29 20.68C19.383 20.7738 19.4936 20.8482 19.6154 20.8989C19.7373 20.9497 19.868 20.9758 20 20.9758C20.132 20.9758 20.2627 20.9497 20.3846 20.8989C20.5064 20.8482 20.617 20.7738 20.71 20.68C20.8902 20.4936 20.991 20.2444 20.991 19.985C20.991 19.7257 20.8902 19.4765 20.71 19.29ZM10 17C8.61553 17 7.26215 16.5895 6.111 15.8203C4.95986 15.0511 4.06265 13.9579 3.53284 12.6788C3.00303 11.3997 2.8644 9.99226 3.1345 8.63439C3.4046 7.27653 4.07128 6.02925 5.05025 5.05028C6.02922 4.07131 7.2765 3.40463 8.63436 3.13453C9.99223 2.86443 11.3997 3.00306 12.6788 3.53287C13.9579 4.06268 15.0511 4.95989 15.8203 6.11103C16.5895 7.26218 17 8.61556 17 10C17 11.8565 16.2625 13.637 14.9497 14.9498C13.637 16.2625 11.8565 17 10 17Z" fill="#C3C3C6"/>
                </svg>
                <input className="search__container--input"
                       type="text"
                       placeholder="Введи имя, тег, почту..."
                />
                <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="sort--icon">
                    <path d="M1.5 0C1.30222 0 1.10888 0.0586491 0.94443 0.16853C0.779981 0.278412 0.651809 0.434591 0.576121 0.617317C0.500433 0.800043 0.48063 1.00111 0.519215 1.19509C0.5578 1.38907 0.653041 1.56725 0.792894 1.70711C0.932746 1.84696 1.11093 1.9422 1.30491 1.98079C1.49889 2.01937 1.69996 1.99957 1.88268 1.92388C2.06541 1.84819 2.22159 1.72002 2.33147 1.55557C2.44135 1.39112 2.5 1.19778 2.5 1C2.5 0.734784 2.39464 0.48043 2.20711 0.292893C2.01957 0.105357 1.76522 0 1.5 0ZM5.5 2H19.5C19.7652 2 20.0196 1.89464 20.2071 1.70711C20.3946 1.51957 20.5 1.26522 20.5 1C20.5 0.734784 20.3946 0.48043 20.2071 0.292893C20.0196 0.105357 19.7652 0 19.5 0H5.5C5.23478 0 4.98043 0.105357 4.79289 0.292893C4.60536 0.48043 4.5 0.734784 4.5 1C4.5 1.26522 4.60536 1.51957 4.79289 1.70711C4.98043 1.89464 5.23478 2 5.5 2ZM5.5 5C5.30222 5 5.10888 5.05865 4.94443 5.16853C4.77998 5.27841 4.65181 5.43459 4.57612 5.61732C4.50043 5.80004 4.48063 6.00111 4.51922 6.19509C4.5578 6.38907 4.65304 6.56725 4.79289 6.70711C4.93275 6.84696 5.11093 6.9422 5.30491 6.98079C5.49889 7.01937 5.69996 6.99957 5.88268 6.92388C6.06541 6.84819 6.22159 6.72002 6.33147 6.55557C6.44135 6.39112 6.5 6.19778 6.5 6C6.5 5.73478 6.39464 5.48043 6.20711 5.29289C6.01957 5.10536 5.76522 5 5.5 5ZM9.5 10C9.30222 10 9.10888 10.0586 8.94443 10.1685C8.77998 10.2784 8.65181 10.4346 8.57612 10.6173C8.50043 10.8 8.48063 11.0011 8.51922 11.1951C8.5578 11.3891 8.65304 11.5673 8.79289 11.7071C8.93275 11.847 9.11093 11.9422 9.30491 11.9808C9.49889 12.0194 9.69996 11.9996 9.88268 11.9239C10.0654 11.8482 10.2216 11.72 10.3315 11.5556C10.4414 11.3911 10.5 11.1978 10.5 11C10.5 10.7348 10.3946 10.4804 10.2071 10.2929C10.0196 10.1054 9.76522 10 9.5 10ZM19.5 5H9.5C9.23478 5 8.98043 5.10536 8.79289 5.29289C8.60536 5.48043 8.5 5.73478 8.5 6C8.5 6.26522 8.60536 6.51957 8.79289 6.70711C8.98043 6.89464 9.23478 7 9.5 7H19.5C19.7652 7 20.0196 6.89464 20.2071 6.70711C20.3946 6.51957 20.5 6.26522 20.5 6C20.5 5.73478 20.3946 5.48043 20.2071 5.29289C20.0196 5.10536 19.7652 5 19.5 5ZM19.5 10H13.5C13.2348 10 12.9804 10.1054 12.7929 10.2929C12.6054 10.4804 12.5 10.7348 12.5 11C12.5 11.2652 12.6054 11.5196 12.7929 11.7071C12.9804 11.8946 13.2348 12 13.5 12H19.5C19.7652 12 20.0196 11.8946 20.2071 11.7071C20.3946 11.5196 20.5 11.2652 20.5 11C20.5 10.7348 20.3946 10.4804 20.2071 10.2929C20.0196 10.1054 19.7652 10 19.5 10Z" fill="#C3C3C6"/>
                </svg>
            </div>
        </div>
    );
}

export default Search;