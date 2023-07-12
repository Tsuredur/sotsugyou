<template>
    <el-row>
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <el-card class="box-card">
                    <div class="user">
                        <img src="../assets/images/profile.jpg" alt="">
                        <div class="userinfo">
                            <p class="name">Admin</p>
                            <p class="access">管理员</p>
                        </div>
                    </div>
                    <div class="login-info"></div>
                </el-card>
            </div>
        </el-col>
        <el-col :span="16"><div class="grid-content bg-purple-light">1</div></el-col>
    </el-row>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        }
    }
</script>