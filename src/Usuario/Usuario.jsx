export function Usuario() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                        <i class="bi bi-person-bounding-box"></i>
                                        </span>
                                        <input type="text" className="form-control" placeholder="Apellidos" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" placeholder="Nombres" />
                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" placeholder="Documentos" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" placeholder="Telefono" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">@</span>
                                        <input type="date" className="form-control" placeholder="Fecha" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-12">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">@</span>
                                        <input type="Email" className="form-control" placeholder="Correo" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">@</span>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>departamento</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">@</span>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>municipio</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <button className="btn btn-outline-primary w-100 mx-auto d-block my-3">registrar</button>

                        </form>
                    </div>
                </div >
            </div >
        </>     
    )
}