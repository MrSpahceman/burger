<div class="container">
    <div class="jumbotron">
        <img class="burger-time center-block" src="/../../assets/img/BurgerTime-Logo.png" alt="Burger Time Logo" />
        <button type="button" class="btn btn-primary btn-lg center-block" data-toggle="modal" data-target="#burger-Modal">Create Some Burgers for dat Boi to Eat</button>
    </div>

    <div class="row">
        <div class="col col-sm-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title text-center">Burgers for Dat Boi!</h3>
                </div><div class="panel-body">
                    <div class="row">
                        {{#each burgers}}
                            {{#unless this.devoured}}
                                <div class="burgers col col-sm-12">
                                    <div class="col col-sm-6">
                                        <img class="burger-img img-responsive" src="/assets/img/burger.png" alt="Burger Image">
                                        <p class="burgers-name">{{this.name}}</p>
                                    </div>
                                    <div class="col col-sm-3">
                                        <form action="burgers/devour/{{this.id}}?_method=PUT" method="POST">
                                            <input type="hidden" name="devoured" value="true">
                                            <button class="btn btn-sm btn-success center-block" type="submit">Devour It!</button>
                                        </form>
                                    </div>
                                    <div class="col col-sm-3">
                                        <form action="burgers/clear/{{this.id}}?_method=DELETE" method="POST">
                                            <input type="hidden" name="id" value="{{this.id}}">
                                            <button class="btn btn-sm btn-danger center-block" type="submit">Remove Burger?</button>
                                        </form>
                                    </div>
                                </div>
                            {{/unless}}
                        {{/each}}
                    </div>
                </div>
            </div>
        </div>
        <div class="col col-sm-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title text-center">Devoured Burgers</h3>
                </div>
                <div class="panel-body">
                    <div class="row">
                        {{#each burgers}}
                            {{#if this.devoured}}
                                <div class="burgers col col-sm-12">
                                    <div class="col col-sm-6">
                                        <img class="burger-img img-responsive" src="assets/img/burger.png" alt="Burger Image">
                                        <p class="burgers-name">{{this.name}}</p>
                                    </div>
                                    <div class="col col-sm-6">
                                        <form action="burgers/clear/{{this.id}}?_method=DELETE" method="POST">
                                            <input type="hidden" name="id" value="{{this.id}}">
                                            <button class="btn btn-sm btn-warning center-block" type="submit">Clear your Burgers?</button>
                                        </form>
                                    </div>
                                </div>
                            {{/if}}
                        {{/each}}
                    </div>
                </div>
            </div>
        </div>
        <!-- Create Burgers Modal -->
        <div class="modal fade" id="burger-Modal" tabindex="-1" role="dialog" aria-labelledby="myBurgerModal">
            <div class="modal-dialog modal-lg" role="document">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h5 class="modal-title" id="#myBurgerModal">Create Burgers</h5>
                    </div>
                    <form class="create-update-form" action="/burgers/create" method="POST">
                        <div class="burger-create modal-body">
                            <div class="form-group">
                                <label for="burger">Burger Type</label>
                                <textarea rows="2" class="form-control" id="burger" name="name" placeholder="Enter a Burger type. Yes, there is more than one type of Burger you know?"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="hidden" name="devoured" value="0">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-md btn-success" type="submit">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>