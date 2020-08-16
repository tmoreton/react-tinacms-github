/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
export * from './authenticate';
export interface GithubClientOptions {
    proxy: string;
    clientId: string;
    authCallbackRoute: string;
    baseRepoFullName: string;
    baseBranch?: string;
    authScope?: AuthScope;
}
export interface Branch {
    name: string;
    protected: boolean;
}
export declare type AuthScope = 'public_repo' | 'repo';
export declare class GithubClient {
    static WORKING_REPO_COOKIE_KEY: string;
    static HEAD_BRANCH_COOKIE_KEY: string;
    proxy: string;
    baseRepoFullName: string;
    baseBranch: string;
    clientId: string;
    authCallbackRoute: string;
    authScope: AuthScope;
    constructor({ proxy, clientId, authCallbackRoute, baseRepoFullName, baseBranch, authScope, }: GithubClientOptions);
    authenticate(): Promise<void>;
    isAuthenticated(): Promise<any>;
    get isFork(): boolean;
    isAuthorized(): Promise<boolean>;
    getUser(): Promise<any>;
    getRepository(): Promise<any>;
    createFork(): Promise<any>;
    createPR(title: string, body: string): Promise<any>;
    get workingRepoFullName(): string;
    setWorkingRepoFullName(repoFullName: string): void;
    get branchName(): string;
    setWorkingBranch(branch: string): void;
    fetchExistingPR(): Promise<any>;
    getBranch(): Promise<any>;
    getBranchList(): Promise<Branch[]>;
    createBranch(name: string): Promise<any>;
    commit(filePath: string, sha: string, fileContents: string, commitMessage?: string): Promise<any>;
    getDownloadUrl(path: string): Promise<string>;
    fetchFile(filePath: string, decoded?: boolean): Promise<any>;
    githubFileApi(path: string, fileContents: string, commitMessage: string | undefined, encoded: boolean | undefined, method: 'PUT' | 'DELETE'): Promise<any>;
    upload(path: string, fileContents: string, commitMessage?: string, encoded?: boolean): Promise<any>;
    delete(path: string, commitMessage?: string): Promise<any>;
    protected req(data: any): Promise<any>;
    protected getGithubResponse(response: Response): Promise<any>;
    private validate;
    /**
     * The methods below maybe don't belong on GitHub client, but it's fine for now.
     */
    private proxyRequest;
    private getCookie;
    private setCookie;
}
