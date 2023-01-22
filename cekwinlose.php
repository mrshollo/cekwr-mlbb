<?php
require 'lib/header.php';
require 'lib/navbar.php';
?>
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-header">
                <h4 class="header-title"><i class="text-primary"></i> Cek Jumlah Win Lose</h4>
            </div>
			 <div class="card-body">
					<div class="form-group">
                        <div class="mb-3">
                            <label class="mb-1" for="idMatch">Total Match Anda</label>
                            <input type="number" placeholder="Contoh: 765" autofocus autocomplete="off" id="tMatch" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="mb-1" for="tWr">Total WR Anda</label>
                            <input type="number" placeholder="Contoh: 65.4" step="any" autocomplete="off" id="tWr" class="form-control">
                        </div>
                        <button class="btn btn-primary d-block w-100 mt-4" type="button" id="hasil">Cek Hasil</button>
                    </form>
                </div>

                <span id="resultText" class="text-center d-block">
                </span>
                <hr>
                <a href="index.php" class="text-center d-block text-primary">Kembali Ke Dashboard</a>
                
        <!-- Start Script Src -->
<script src="assets/js/global.js"></script>
<script src="assets/js/winlose.js"></script>
        <!-- Finish Script Src -->
        
<?php
require 'lib/footer.php';
?>