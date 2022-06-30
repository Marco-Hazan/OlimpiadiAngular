'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">olimpiadi-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a059f6e637aa64e049233ba5c7466322f8b93c6a7b80bb06195e9dc9c8f40ce18c82ba22900807ad29da19331518b573a4f4b91222372cd304fd7fe2ba0b5db8"' : 'data-target="#xs-components-links-module-AppModule-a059f6e637aa64e049233ba5c7466322f8b93c6a7b80bb06195e9dc9c8f40ce18c82ba22900807ad29da19331518b573a4f4b91222372cd304fd7fe2ba0b5db8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a059f6e637aa64e049233ba5c7466322f8b93c6a7b80bb06195e9dc9c8f40ce18c82ba22900807ad29da19331518b573a4f4b91222372cd304fd7fe2ba0b5db8"' :
                                            'id="xs-components-links-module-AppModule-a059f6e637aa64e049233ba5c7466322f8b93c6a7b80bb06195e9dc9c8f40ce18c82ba22900807ad29da19331518b573a4f4b91222372cd304fd7fe2ba0b5db8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-d5dcf412d1bb1686bd0f3abe310681132ebe17f27486143a171f8af11773338c39b727b556e8931ce1a7a4b77ff54003c15e5141f2e159a1b769b66da749f2c7"' : 'data-target="#xs-components-links-module-CoreModule-d5dcf412d1bb1686bd0f3abe310681132ebe17f27486143a171f8af11773338c39b727b556e8931ce1a7a4b77ff54003c15e5141f2e159a1b769b66da749f2c7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-d5dcf412d1bb1686bd0f3abe310681132ebe17f27486143a171f8af11773338c39b727b556e8931ce1a7a4b77ff54003c15e5141f2e159a1b769b66da749f2c7"' :
                                            'id="xs-components-links-module-CoreModule-d5dcf412d1bb1686bd0f3abe310681132ebe17f27486143a171f8af11773338c39b727b556e8931ce1a7a4b77ff54003c15e5141f2e159a1b769b66da749f2c7"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RiepilogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RiepilogoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModelModule.html" data-type="entity-link" >ModelModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ModelModule-32208621a10224de213a5f759f78c2a8dc56f3441ec15fbf1a77e3c11bf52f826dcd78ef1613ef74524133cd4939420dd4c2c568be64b4e131a514f62f9baf7f"' : 'data-target="#xs-injectables-links-module-ModelModule-32208621a10224de213a5f759f78c2a8dc56f3441ec15fbf1a77e3c11bf52f826dcd78ef1613ef74524133cd4939420dd4c2c568be64b4e131a514f62f9baf7f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ModelModule-32208621a10224de213a5f759f78c2a8dc56f3441ec15fbf1a77e3c11bf52f826dcd78ef1613ef74524133cd4939420dd4c2c568be64b4e131a514f62f9baf7f"' :
                                        'id="xs-injectables-links-module-ModelModule-32208621a10224de213a5f759f78c2a8dc56f3441ec15fbf1a77e3c11bf52f826dcd78ef1613ef74524133cd4939420dd4c2c568be64b4e131a514f62f9baf7f"' }>
                                        <li class="link">
                                            <a href="injectables/AtletaRepositoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AtletaRepositoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/OlimpioniciService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OlimpioniciService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RepositoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RepositoryService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SelezionatoreRepositoryService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SelezionatoreRepositoryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Selezione.html" data-type="entity-link" >Selezione</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AtletaRepositoryService.html" data-type="entity-link" >AtletaRepositoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OlimpioniciService.html" data-type="entity-link" >OlimpioniciService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RepositoryService.html" data-type="entity-link" >RepositoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SelezionatoreRepositoryService.html" data-type="entity-link" >SelezionatoreRepositoryService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Atleta.html" data-type="entity-link" >Atleta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Selezionatore.html" data-type="entity-link" >Selezionatore</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});