// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEndpointProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) for the certificate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#certificate_arn CcEndpoint#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * The name of the endpoint database. For a MySQL source or target endpoint, don't specify DatabaseName. To migrate to a specific database, use this setting and targetDbType.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#database_name CcEndpoint#database_name}
    */
    readonly databaseName?: string;
    /**
    * Settings in JSON format for the source and target DocumentDB endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#doc_db_settings CcEndpoint#doc_db_settings}
    */
    readonly docDbSettings?: CcEndpoint.DocDbSettingsProperty;
    /**
    * Settings in JSON format for the target Amazon DynamoDB endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#dynamo_db_settings CcEndpoint#dynamo_db_settings}
    */
    readonly dynamoDbSettings?: CcEndpoint.DynamoDbSettingsProperty;
    /**
    * Settings in JSON format for the target OpenSearch endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#elasticsearch_settings CcEndpoint#elasticsearch_settings}
    */
    readonly elasticsearchSettings?: CcEndpoint.ElasticsearchSettingsProperty;
    /**
    * The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#endpoint_identifier CcEndpoint#endpoint_identifier}
    */
    readonly endpointIdentifier?: string;
    /**
    * The type of endpoint. Valid values are source and target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#endpoint_type CcEndpoint#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * The type of engine for the endpoint, depending on the EndpointType value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#engine_name CcEndpoint#engine_name}
    */
    readonly engineName: string;
    /**
    * Additional attributes associated with the connection
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#extra_connection_attributes CcEndpoint#extra_connection_attributes}
    */
    readonly extraConnectionAttributes?: string;
    /**
    * Settings in JSON format for the source GCP MySQL endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#gcp_my_sql_settings CcEndpoint#gcp_my_sql_settings}
    */
    readonly gcpMySqlSettings?: CcEndpoint.GcpMySQLSettingsProperty;
    /**
    * Settings in JSON format for the source IBM Db2 LUW endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#ibm_db_2_settings CcEndpoint#ibm_db_2_settings}
    */
    readonly ibmDb2Settings?: CcEndpoint.IbmDb2SettingsProperty;
    /**
    * Settings in JSON format for the target Apache Kafka endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#kafka_settings CcEndpoint#kafka_settings}
    */
    readonly kafkaSettings?: CcEndpoint.KafkaSettingsProperty;
    /**
    * Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#kinesis_settings CcEndpoint#kinesis_settings}
    */
    readonly kinesisSettings?: CcEndpoint.KinesisSettingsProperty;
    /**
    * An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.If you don't specify a value for the KmsKeyId parameter, AWS DMS uses your default encryption key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#kms_key_id CcEndpoint#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Settings in JSON format for the source and target Microsoft SQL Server endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#microsoft_sql_server_settings CcEndpoint#microsoft_sql_server_settings}
    */
    readonly microsoftSqlServerSettings?: CcEndpoint.MicrosoftSqlServerSettingsProperty;
    /**
    * Settings in JSON format for the source MongoDB endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#mongo_db_settings CcEndpoint#mongo_db_settings}
    */
    readonly mongoDbSettings?: CcEndpoint.MongoDbSettingsProperty;
    /**
    * Settings in JSON format for the source and target MySQL endpoin
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#my_sql_settings CcEndpoint#my_sql_settings}
    */
    readonly mySqlSettings?: CcEndpoint.MySqlSettingsProperty;
    /**
    * Settings in JSON format for the target Amazon Neptune endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#neptune_settings CcEndpoint#neptune_settings}
    */
    readonly neptuneSettings?: CcEndpoint.NeptuneSettingsProperty;
    /**
    * Settings in JSON format for the source and target Oracle endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#oracle_settings CcEndpoint#oracle_settings}
    */
    readonly oracleSettings?: CcEndpoint.OracleSettingsProperty;
    /**
    * The password to be used to log in to the endpoint database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#password CcEndpoint#password}
    */
    readonly password?: string;
    /**
    * The port used by the endpoint database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#port CcEndpoint#port}
    */
    readonly port?: number;
    /**
    * Settings in JSON format for the source and target PostgreSQL endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#postgre_sql_settings CcEndpoint#postgre_sql_settings}
    */
    readonly postgreSqlSettings?: CcEndpoint.PostgreSqlSettingsProperty;
    /**
    * Settings in JSON format for the target Redis endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#redis_settings CcEndpoint#redis_settings}
    */
    readonly redisSettings?: CcEndpoint.RedisSettingsProperty;
    /**
    * Settings in JSON format for the Amazon Redshift endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#redshift_settings CcEndpoint#redshift_settings}
    */
    readonly redshiftSettings?: CcEndpoint.RedshiftSettingsProperty;
    /**
    * A display name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#resource_identifier CcEndpoint#resource_identifier}
    */
    readonly resourceIdentifier?: string;
    /**
    * Settings in JSON format for the source and target Amazon S3 endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#s3_settings CcEndpoint#s3_settings}
    */
    readonly s3Settings?: CcEndpoint.S3SettingsProperty;
    /**
    * The name of the server where the endpoint database resides.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#server_name CcEndpoint#server_name}
    */
    readonly serverName?: string;
    /**
    * The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#ssl_mode CcEndpoint#ssl_mode}
    */
    readonly sslMode?: string;
    /**
    * Settings in JSON format for the source and target SAP ASE endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#sybase_settings CcEndpoint#sybase_settings}
    */
    readonly sybaseSettings?: CcEndpoint.SybaseSettingsProperty;
    /**
    * One or more tags to be assigned to the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#tags CcEndpoint#tags}
    */
    readonly tags?: CcEndpoint.TagProperty[] | cdktn.IResolvable;
    /**
    * The user name to be used to log in to the endpoint database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#username CcEndpoint#username}
    */
    readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint awscc_dms_endpoint}
*/
export class CcEndpoint extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_dms_endpoint";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEndpoint resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEndpoint to import
    * @param importFromId The id of the existing CcEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEndpoint to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_dms_endpoint", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint awscc_dms_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEndpointProps
    */
    public constructor(scope: Construct, id: string, config: CcEndpointProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_dms_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._certificateArn = config.certificateArn;
        this._databaseName = config.databaseName;
        this._docDbSettings.internalValue = config.docDbSettings;
        this._dynamoDbSettings.internalValue = config.dynamoDbSettings;
        this._elasticsearchSettings.internalValue = config.elasticsearchSettings;
        this._endpointIdentifier = config.endpointIdentifier;
        this._endpointType = config.endpointType;
        this._engineName = config.engineName;
        this._extraConnectionAttributes = config.extraConnectionAttributes;
        this._gcpMySqlSettings.internalValue = config.gcpMySqlSettings;
        this._ibmDb2Settings.internalValue = config.ibmDb2Settings;
        this._kafkaSettings.internalValue = config.kafkaSettings;
        this._kinesisSettings.internalValue = config.kinesisSettings;
        this._kmsKeyId = config.kmsKeyId;
        this._microsoftSqlServerSettings.internalValue = config.microsoftSqlServerSettings;
        this._mongoDbSettings.internalValue = config.mongoDbSettings;
        this._mySqlSettings.internalValue = config.mySqlSettings;
        this._neptuneSettings.internalValue = config.neptuneSettings;
        this._oracleSettings.internalValue = config.oracleSettings;
        this._password = config.password;
        this._port = config.port;
        this._postgreSqlSettings.internalValue = config.postgreSqlSettings;
        this._redisSettings.internalValue = config.redisSettings;
        this._redshiftSettings.internalValue = config.redshiftSettings;
        this._resourceIdentifier = config.resourceIdentifier;
        this._s3Settings.internalValue = config.s3Settings;
        this._serverName = config.serverName;
        this._sslMode = config.sslMode;
        this._sybaseSettings.internalValue = config.sybaseSettings;
        this._tags.internalValue = config.tags;
        this._username = config.username;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // certificate_arn - computed: true, optional: true, required: false
    private _certificateArn?: string; 
    public get certificateArn() {
        return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string) {
        this._certificateArn = value;
    }
    public resetCertificateArn() {
        this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
        return this._certificateArn;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // doc_db_settings - computed: true, optional: true, required: false
    private _docDbSettings = new CcEndpoint.DocDbSettingsPropertyOutputReference(this, "doc_db_settings");
    public get docDbSettings() {
        return this._docDbSettings;
    }
    public putDocDbSettings(value: CcEndpoint.DocDbSettingsProperty) {
        this._docDbSettings.internalValue = value;
    }
    public resetDocDbSettings() {
        this._docDbSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get docDbSettingsInput() {
        return this._docDbSettings.internalValue;
    }

    // dynamo_db_settings - computed: true, optional: true, required: false
    private _dynamoDbSettings = new CcEndpoint.DynamoDbSettingsPropertyOutputReference(this, "dynamo_db_settings");
    public get dynamoDbSettings() {
        return this._dynamoDbSettings;
    }
    public putDynamoDbSettings(value: CcEndpoint.DynamoDbSettingsProperty) {
        this._dynamoDbSettings.internalValue = value;
    }
    public resetDynamoDbSettings() {
        this._dynamoDbSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDbSettingsInput() {
        return this._dynamoDbSettings.internalValue;
    }

    // elasticsearch_settings - computed: true, optional: true, required: false
    private _elasticsearchSettings = new CcEndpoint.ElasticsearchSettingsPropertyOutputReference(this, "elasticsearch_settings");
    public get elasticsearchSettings() {
        return this._elasticsearchSettings;
    }
    public putElasticsearchSettings(value: CcEndpoint.ElasticsearchSettingsProperty) {
        this._elasticsearchSettings.internalValue = value;
    }
    public resetElasticsearchSettings() {
        this._elasticsearchSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticsearchSettingsInput() {
        return this._elasticsearchSettings.internalValue;
    }

    // endpoint_arn - computed: true, optional: false, required: false
    public get endpointArn() {
        return this.getStringAttribute('endpoint_arn');
    }

    // endpoint_identifier - computed: true, optional: true, required: false
    private _endpointIdentifier?: string; 
    public get endpointIdentifier() {
        return this.getStringAttribute('endpoint_identifier');
    }
    public set endpointIdentifier(value: string) {
        this._endpointIdentifier = value;
    }
    public resetEndpointIdentifier() {
        this._endpointIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointIdentifierInput() {
        return this._endpointIdentifier;
    }

    // endpoint_type - computed: false, optional: false, required: true
    private _endpointType?: string; 
    public get endpointType() {
        return this.getStringAttribute('endpoint_type');
    }
    public set endpointType(value: string) {
        this._endpointType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointTypeInput() {
        return this._endpointType;
    }

    // engine_name - computed: false, optional: false, required: true
    private _engineName?: string; 
    public get engineName() {
        return this.getStringAttribute('engine_name');
    }
    public set engineName(value: string) {
        this._engineName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get engineNameInput() {
        return this._engineName;
    }

    // external_id - computed: true, optional: false, required: false
    public get externalId() {
        return this.getStringAttribute('external_id');
    }

    // extra_connection_attributes - computed: true, optional: true, required: false
    private _extraConnectionAttributes?: string; 
    public get extraConnectionAttributes() {
        return this.getStringAttribute('extra_connection_attributes');
    }
    public set extraConnectionAttributes(value: string) {
        this._extraConnectionAttributes = value;
    }
    public resetExtraConnectionAttributes() {
        this._extraConnectionAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extraConnectionAttributesInput() {
        return this._extraConnectionAttributes;
    }

    // gcp_my_sql_settings - computed: true, optional: true, required: false
    private _gcpMySqlSettings = new CcEndpoint.GcpMySQLSettingsPropertyOutputReference(this, "gcp_my_sql_settings");
    public get gcpMySqlSettings() {
        return this._gcpMySqlSettings;
    }
    public putGcpMySqlSettings(value: CcEndpoint.GcpMySQLSettingsProperty) {
        this._gcpMySqlSettings.internalValue = value;
    }
    public resetGcpMySqlSettings() {
        this._gcpMySqlSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gcpMySqlSettingsInput() {
        return this._gcpMySqlSettings.internalValue;
    }

    // ibm_db_2_settings - computed: true, optional: true, required: false
    private _ibmDb2Settings = new CcEndpoint.IbmDb2SettingsPropertyOutputReference(this, "ibm_db_2_settings");
    public get ibmDb2Settings() {
        return this._ibmDb2Settings;
    }
    public putIbmDb2Settings(value: CcEndpoint.IbmDb2SettingsProperty) {
        this._ibmDb2Settings.internalValue = value;
    }
    public resetIbmDb2Settings() {
        this._ibmDb2Settings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ibmDb2SettingsInput() {
        return this._ibmDb2Settings.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kafka_settings - computed: true, optional: true, required: false
    private _kafkaSettings = new CcEndpoint.KafkaSettingsPropertyOutputReference(this, "kafka_settings");
    public get kafkaSettings() {
        return this._kafkaSettings;
    }
    public putKafkaSettings(value: CcEndpoint.KafkaSettingsProperty) {
        this._kafkaSettings.internalValue = value;
    }
    public resetKafkaSettings() {
        this._kafkaSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kafkaSettingsInput() {
        return this._kafkaSettings.internalValue;
    }

    // kinesis_settings - computed: true, optional: true, required: false
    private _kinesisSettings = new CcEndpoint.KinesisSettingsPropertyOutputReference(this, "kinesis_settings");
    public get kinesisSettings() {
        return this._kinesisSettings;
    }
    public putKinesisSettings(value: CcEndpoint.KinesisSettingsProperty) {
        this._kinesisSettings.internalValue = value;
    }
    public resetKinesisSettings() {
        this._kinesisSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisSettingsInput() {
        return this._kinesisSettings.internalValue;
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // microsoft_sql_server_settings - computed: true, optional: true, required: false
    private _microsoftSqlServerSettings = new CcEndpoint.MicrosoftSqlServerSettingsPropertyOutputReference(this, "microsoft_sql_server_settings");
    public get microsoftSqlServerSettings() {
        return this._microsoftSqlServerSettings;
    }
    public putMicrosoftSqlServerSettings(value: CcEndpoint.MicrosoftSqlServerSettingsProperty) {
        this._microsoftSqlServerSettings.internalValue = value;
    }
    public resetMicrosoftSqlServerSettings() {
        this._microsoftSqlServerSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get microsoftSqlServerSettingsInput() {
        return this._microsoftSqlServerSettings.internalValue;
    }

    // mongo_db_settings - computed: true, optional: true, required: false
    private _mongoDbSettings = new CcEndpoint.MongoDbSettingsPropertyOutputReference(this, "mongo_db_settings");
    public get mongoDbSettings() {
        return this._mongoDbSettings;
    }
    public putMongoDbSettings(value: CcEndpoint.MongoDbSettingsProperty) {
        this._mongoDbSettings.internalValue = value;
    }
    public resetMongoDbSettings() {
        this._mongoDbSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mongoDbSettingsInput() {
        return this._mongoDbSettings.internalValue;
    }

    // my_sql_settings - computed: true, optional: true, required: false
    private _mySqlSettings = new CcEndpoint.MySqlSettingsPropertyOutputReference(this, "my_sql_settings");
    public get mySqlSettings() {
        return this._mySqlSettings;
    }
    public putMySqlSettings(value: CcEndpoint.MySqlSettingsProperty) {
        this._mySqlSettings.internalValue = value;
    }
    public resetMySqlSettings() {
        this._mySqlSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mySqlSettingsInput() {
        return this._mySqlSettings.internalValue;
    }

    // neptune_settings - computed: true, optional: true, required: false
    private _neptuneSettings = new CcEndpoint.NeptuneSettingsPropertyOutputReference(this, "neptune_settings");
    public get neptuneSettings() {
        return this._neptuneSettings;
    }
    public putNeptuneSettings(value: CcEndpoint.NeptuneSettingsProperty) {
        this._neptuneSettings.internalValue = value;
    }
    public resetNeptuneSettings() {
        this._neptuneSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get neptuneSettingsInput() {
        return this._neptuneSettings.internalValue;
    }

    // oracle_settings - computed: true, optional: true, required: false
    private _oracleSettings = new CcEndpoint.OracleSettingsPropertyOutputReference(this, "oracle_settings");
    public get oracleSettings() {
        return this._oracleSettings;
    }
    public putOracleSettings(value: CcEndpoint.OracleSettingsProperty) {
        this._oracleSettings.internalValue = value;
    }
    public resetOracleSettings() {
        this._oracleSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oracleSettingsInput() {
        return this._oracleSettings.internalValue;
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // postgre_sql_settings - computed: true, optional: true, required: false
    private _postgreSqlSettings = new CcEndpoint.PostgreSqlSettingsPropertyOutputReference(this, "postgre_sql_settings");
    public get postgreSqlSettings() {
        return this._postgreSqlSettings;
    }
    public putPostgreSqlSettings(value: CcEndpoint.PostgreSqlSettingsProperty) {
        this._postgreSqlSettings.internalValue = value;
    }
    public resetPostgreSqlSettings() {
        this._postgreSqlSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postgreSqlSettingsInput() {
        return this._postgreSqlSettings.internalValue;
    }

    // redis_settings - computed: true, optional: true, required: false
    private _redisSettings = new CcEndpoint.RedisSettingsPropertyOutputReference(this, "redis_settings");
    public get redisSettings() {
        return this._redisSettings;
    }
    public putRedisSettings(value: CcEndpoint.RedisSettingsProperty) {
        this._redisSettings.internalValue = value;
    }
    public resetRedisSettings() {
        this._redisSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redisSettingsInput() {
        return this._redisSettings.internalValue;
    }

    // redshift_settings - computed: true, optional: true, required: false
    private _redshiftSettings = new CcEndpoint.RedshiftSettingsPropertyOutputReference(this, "redshift_settings");
    public get redshiftSettings() {
        return this._redshiftSettings;
    }
    public putRedshiftSettings(value: CcEndpoint.RedshiftSettingsProperty) {
        this._redshiftSettings.internalValue = value;
    }
    public resetRedshiftSettings() {
        this._redshiftSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftSettingsInput() {
        return this._redshiftSettings.internalValue;
    }

    // resource_identifier - computed: true, optional: true, required: false
    private _resourceIdentifier?: string; 
    public get resourceIdentifier() {
        return this.getStringAttribute('resource_identifier');
    }
    public set resourceIdentifier(value: string) {
        this._resourceIdentifier = value;
    }
    public resetResourceIdentifier() {
        this._resourceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdentifierInput() {
        return this._resourceIdentifier;
    }

    // s3_settings - computed: true, optional: true, required: false
    private _s3Settings = new CcEndpoint.S3SettingsPropertyOutputReference(this, "s3_settings");
    public get s3Settings() {
        return this._s3Settings;
    }
    public putS3Settings(value: CcEndpoint.S3SettingsProperty) {
        this._s3Settings.internalValue = value;
    }
    public resetS3Settings() {
        this._s3Settings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3SettingsInput() {
        return this._s3Settings.internalValue;
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // ssl_mode - computed: true, optional: true, required: false
    private _sslMode?: string; 
    public get sslMode() {
        return this.getStringAttribute('ssl_mode');
    }
    public set sslMode(value: string) {
        this._sslMode = value;
    }
    public resetSslMode() {
        this._sslMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslModeInput() {
        return this._sslMode;
    }

    // sybase_settings - computed: true, optional: true, required: false
    private _sybaseSettings = new CcEndpoint.SybaseSettingsPropertyOutputReference(this, "sybase_settings");
    public get sybaseSettings() {
        return this._sybaseSettings;
    }
    public putSybaseSettings(value: CcEndpoint.SybaseSettingsProperty) {
        this._sybaseSettings.internalValue = value;
    }
    public resetSybaseSettings() {
        this._sybaseSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sybaseSettingsInput() {
        return this._sybaseSettings.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcEndpoint.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcEndpoint.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            certificate_arn: cdktn.stringToTerraform(this._certificateArn),
            database_name: cdktn.stringToTerraform(this._databaseName),
            doc_db_settings: ccEndpointDocDbSettingsPropertyToTerraform(this._docDbSettings.internalValue),
            dynamo_db_settings: ccEndpointDynamoDbSettingsPropertyToTerraform(this._dynamoDbSettings.internalValue),
            elasticsearch_settings: ccEndpointElasticsearchSettingsPropertyToTerraform(this._elasticsearchSettings.internalValue),
            endpoint_identifier: cdktn.stringToTerraform(this._endpointIdentifier),
            endpoint_type: cdktn.stringToTerraform(this._endpointType),
            engine_name: cdktn.stringToTerraform(this._engineName),
            extra_connection_attributes: cdktn.stringToTerraform(this._extraConnectionAttributes),
            gcp_my_sql_settings: ccEndpointGcpMySQLSettingsPropertyToTerraform(this._gcpMySqlSettings.internalValue),
            ibm_db_2_settings: ccEndpointIbmDb2SettingsPropertyToTerraform(this._ibmDb2Settings.internalValue),
            kafka_settings: ccEndpointKafkaSettingsPropertyToTerraform(this._kafkaSettings.internalValue),
            kinesis_settings: ccEndpointKinesisSettingsPropertyToTerraform(this._kinesisSettings.internalValue),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            microsoft_sql_server_settings: ccEndpointMicrosoftSqlServerSettingsPropertyToTerraform(this._microsoftSqlServerSettings.internalValue),
            mongo_db_settings: ccEndpointMongoDbSettingsPropertyToTerraform(this._mongoDbSettings.internalValue),
            my_sql_settings: ccEndpointMySqlSettingsPropertyToTerraform(this._mySqlSettings.internalValue),
            neptune_settings: ccEndpointNeptuneSettingsPropertyToTerraform(this._neptuneSettings.internalValue),
            oracle_settings: ccEndpointOracleSettingsPropertyToTerraform(this._oracleSettings.internalValue),
            password: cdktn.stringToTerraform(this._password),
            port: cdktn.numberToTerraform(this._port),
            postgre_sql_settings: ccEndpointPostgreSqlSettingsPropertyToTerraform(this._postgreSqlSettings.internalValue),
            redis_settings: ccEndpointRedisSettingsPropertyToTerraform(this._redisSettings.internalValue),
            redshift_settings: ccEndpointRedshiftSettingsPropertyToTerraform(this._redshiftSettings.internalValue),
            resource_identifier: cdktn.stringToTerraform(this._resourceIdentifier),
            s3_settings: ccEndpointS3SettingsPropertyToTerraform(this._s3Settings.internalValue),
            server_name: cdktn.stringToTerraform(this._serverName),
            ssl_mode: cdktn.stringToTerraform(this._sslMode),
            sybase_settings: ccEndpointSybaseSettingsPropertyToTerraform(this._sybaseSettings.internalValue),
            tags: cdktn.listMapper(ccEndpointTagPropertyToTerraform, false)(this._tags.internalValue),
            username: cdktn.stringToTerraform(this._username),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            certificate_arn: {
                value: cdktn.stringToHclTerraform(this._certificateArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            database_name: {
                value: cdktn.stringToHclTerraform(this._databaseName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            doc_db_settings: {
                value: ccEndpointDocDbSettingsPropertyToHclTerraform(this._docDbSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.DocDbSettingsProperty",
            },
            dynamo_db_settings: {
                value: ccEndpointDynamoDbSettingsPropertyToHclTerraform(this._dynamoDbSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.DynamoDbSettingsProperty",
            },
            elasticsearch_settings: {
                value: ccEndpointElasticsearchSettingsPropertyToHclTerraform(this._elasticsearchSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.ElasticsearchSettingsProperty",
            },
            endpoint_identifier: {
                value: cdktn.stringToHclTerraform(this._endpointIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_type: {
                value: cdktn.stringToHclTerraform(this._endpointType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_name: {
                value: cdktn.stringToHclTerraform(this._engineName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            extra_connection_attributes: {
                value: cdktn.stringToHclTerraform(this._extraConnectionAttributes),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gcp_my_sql_settings: {
                value: ccEndpointGcpMySQLSettingsPropertyToHclTerraform(this._gcpMySqlSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.GcpMySQLSettingsProperty",
            },
            ibm_db_2_settings: {
                value: ccEndpointIbmDb2SettingsPropertyToHclTerraform(this._ibmDb2Settings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.IbmDb2SettingsProperty",
            },
            kafka_settings: {
                value: ccEndpointKafkaSettingsPropertyToHclTerraform(this._kafkaSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.KafkaSettingsProperty",
            },
            kinesis_settings: {
                value: ccEndpointKinesisSettingsPropertyToHclTerraform(this._kinesisSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.KinesisSettingsProperty",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            microsoft_sql_server_settings: {
                value: ccEndpointMicrosoftSqlServerSettingsPropertyToHclTerraform(this._microsoftSqlServerSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.MicrosoftSqlServerSettingsProperty",
            },
            mongo_db_settings: {
                value: ccEndpointMongoDbSettingsPropertyToHclTerraform(this._mongoDbSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.MongoDbSettingsProperty",
            },
            my_sql_settings: {
                value: ccEndpointMySqlSettingsPropertyToHclTerraform(this._mySqlSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.MySqlSettingsProperty",
            },
            neptune_settings: {
                value: ccEndpointNeptuneSettingsPropertyToHclTerraform(this._neptuneSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.NeptuneSettingsProperty",
            },
            oracle_settings: {
                value: ccEndpointOracleSettingsPropertyToHclTerraform(this._oracleSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.OracleSettingsProperty",
            },
            password: {
                value: cdktn.stringToHclTerraform(this._password),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            port: {
                value: cdktn.numberToHclTerraform(this._port),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            postgre_sql_settings: {
                value: ccEndpointPostgreSqlSettingsPropertyToHclTerraform(this._postgreSqlSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.PostgreSqlSettingsProperty",
            },
            redis_settings: {
                value: ccEndpointRedisSettingsPropertyToHclTerraform(this._redisSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.RedisSettingsProperty",
            },
            redshift_settings: {
                value: ccEndpointRedshiftSettingsPropertyToHclTerraform(this._redshiftSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.RedshiftSettingsProperty",
            },
            resource_identifier: {
                value: cdktn.stringToHclTerraform(this._resourceIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            s3_settings: {
                value: ccEndpointS3SettingsPropertyToHclTerraform(this._s3Settings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.S3SettingsProperty",
            },
            server_name: {
                value: cdktn.stringToHclTerraform(this._serverName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ssl_mode: {
                value: cdktn.stringToHclTerraform(this._sslMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sybase_settings: {
                value: ccEndpointSybaseSettingsPropertyToHclTerraform(this._sybaseSettings.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcEndpoint.SybaseSettingsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccEndpointTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEndpoint.TagPropertyList",
            },
            username: {
                value: cdktn.stringToHclTerraform(this._username),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEndpointDocDbSettingsPropertyToTerraform(struct?: CcEndpoint.DocDbSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        docs_to_investigate: cdktn.numberToTerraform(struct!.docsToInvestigate),
        extract_doc_id: cdktn.booleanToTerraform(struct!.extractDocId),
        nesting_level: cdktn.stringToTerraform(struct!.nestingLevel),
        secrets_manager_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerAccessRoleArn),
        secrets_manager_secret_id: cdktn.stringToTerraform(struct!.secretsManagerSecretId),
    }
}


export function ccEndpointDocDbSettingsPropertyToHclTerraform(struct?: CcEndpoint.DocDbSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        docs_to_investigate: {
            value: cdktn.numberToHclTerraform(struct!.docsToInvestigate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        extract_doc_id: {
            value: cdktn.booleanToHclTerraform(struct!.extractDocId),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        nesting_level: {
            value: cdktn.stringToHclTerraform(struct!.nestingLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerSecretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointDynamoDbSettingsPropertyToTerraform(struct?: CcEndpoint.DynamoDbSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        service_access_role_arn: cdktn.stringToTerraform(struct!.serviceAccessRoleArn),
    }
}


export function ccEndpointDynamoDbSettingsPropertyToHclTerraform(struct?: CcEndpoint.DynamoDbSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        service_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.serviceAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointElasticsearchSettingsPropertyToTerraform(struct?: CcEndpoint.ElasticsearchSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint_uri: cdktn.stringToTerraform(struct!.endpointUri),
        error_retry_duration: cdktn.numberToTerraform(struct!.errorRetryDuration),
        full_load_error_percentage: cdktn.numberToTerraform(struct!.fullLoadErrorPercentage),
        service_access_role_arn: cdktn.stringToTerraform(struct!.serviceAccessRoleArn),
    }
}


export function ccEndpointElasticsearchSettingsPropertyToHclTerraform(struct?: CcEndpoint.ElasticsearchSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint_uri: {
            value: cdktn.stringToHclTerraform(struct!.endpointUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        error_retry_duration: {
            value: cdktn.numberToHclTerraform(struct!.errorRetryDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        full_load_error_percentage: {
            value: cdktn.numberToHclTerraform(struct!.fullLoadErrorPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        service_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.serviceAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointGcpMySQLSettingsPropertyToTerraform(struct?: CcEndpoint.GcpMySQLSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        after_connect_script: cdktn.stringToTerraform(struct!.afterConnectScript),
        clean_source_metadata_on_mismatch: cdktn.booleanToTerraform(struct!.cleanSourceMetadataOnMismatch),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        events_poll_interval: cdktn.numberToTerraform(struct!.eventsPollInterval),
        max_file_size: cdktn.numberToTerraform(struct!.maxFileSize),
        parallel_load_threads: cdktn.numberToTerraform(struct!.parallelLoadThreads),
        password: cdktn.stringToTerraform(struct!.password),
        port: cdktn.numberToTerraform(struct!.port),
        secrets_manager_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerAccessRoleArn),
        secrets_manager_secret_id: cdktn.stringToTerraform(struct!.secretsManagerSecretId),
        server_name: cdktn.stringToTerraform(struct!.serverName),
        server_timezone: cdktn.stringToTerraform(struct!.serverTimezone),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccEndpointGcpMySQLSettingsPropertyToHclTerraform(struct?: CcEndpoint.GcpMySQLSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        after_connect_script: {
            value: cdktn.stringToHclTerraform(struct!.afterConnectScript),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        clean_source_metadata_on_mismatch: {
            value: cdktn.booleanToHclTerraform(struct!.cleanSourceMetadataOnMismatch),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        events_poll_interval: {
            value: cdktn.numberToHclTerraform(struct!.eventsPollInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_file_size: {
            value: cdktn.numberToHclTerraform(struct!.maxFileSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        parallel_load_threads: {
            value: cdktn.numberToHclTerraform(struct!.parallelLoadThreads),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        password: {
            value: cdktn.stringToHclTerraform(struct!.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        secrets_manager_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerSecretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        server_name: {
            value: cdktn.stringToHclTerraform(struct!.serverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        server_timezone: {
            value: cdktn.stringToHclTerraform(struct!.serverTimezone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktn.stringToHclTerraform(struct!.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointIbmDb2SettingsPropertyToTerraform(struct?: CcEndpoint.IbmDb2SettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        current_lsn: cdktn.stringToTerraform(struct!.currentLsn),
        keep_csv_files: cdktn.booleanToTerraform(struct!.keepCsvFiles),
        load_timeout: cdktn.numberToTerraform(struct!.loadTimeout),
        max_file_size: cdktn.numberToTerraform(struct!.maxFileSize),
        max_k_bytes_per_read: cdktn.numberToTerraform(struct!.maxKBytesPerRead),
        secrets_manager_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerAccessRoleArn),
        secrets_manager_secret_id: cdktn.stringToTerraform(struct!.secretsManagerSecretId),
        set_data_capture_changes: cdktn.booleanToTerraform(struct!.setDataCaptureChanges),
        write_buffer_size: cdktn.numberToTerraform(struct!.writeBufferSize),
    }
}


export function ccEndpointIbmDb2SettingsPropertyToHclTerraform(struct?: CcEndpoint.IbmDb2SettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        current_lsn: {
            value: cdktn.stringToHclTerraform(struct!.currentLsn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        keep_csv_files: {
            value: cdktn.booleanToHclTerraform(struct!.keepCsvFiles),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        load_timeout: {
            value: cdktn.numberToHclTerraform(struct!.loadTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_file_size: {
            value: cdktn.numberToHclTerraform(struct!.maxFileSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_k_bytes_per_read: {
            value: cdktn.numberToHclTerraform(struct!.maxKBytesPerRead),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        secrets_manager_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerSecretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        set_data_capture_changes: {
            value: cdktn.booleanToHclTerraform(struct!.setDataCaptureChanges),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        write_buffer_size: {
            value: cdktn.numberToHclTerraform(struct!.writeBufferSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointKafkaSettingsPropertyToTerraform(struct?: CcEndpoint.KafkaSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        broker: cdktn.stringToTerraform(struct!.broker),
        include_control_details: cdktn.booleanToTerraform(struct!.includeControlDetails),
        include_null_and_empty: cdktn.booleanToTerraform(struct!.includeNullAndEmpty),
        include_partition_value: cdktn.booleanToTerraform(struct!.includePartitionValue),
        include_table_alter_operations: cdktn.booleanToTerraform(struct!.includeTableAlterOperations),
        include_transaction_details: cdktn.booleanToTerraform(struct!.includeTransactionDetails),
        message_format: cdktn.stringToTerraform(struct!.messageFormat),
        message_max_bytes: cdktn.numberToTerraform(struct!.messageMaxBytes),
        no_hex_prefix: cdktn.booleanToTerraform(struct!.noHexPrefix),
        partition_include_schema_table: cdktn.booleanToTerraform(struct!.partitionIncludeSchemaTable),
        sasl_password: cdktn.stringToTerraform(struct!.saslPassword),
        sasl_user_name: cdktn.stringToTerraform(struct!.saslUserName),
        security_protocol: cdktn.stringToTerraform(struct!.securityProtocol),
        ssl_ca_certificate_arn: cdktn.stringToTerraform(struct!.sslCaCertificateArn),
        ssl_client_certificate_arn: cdktn.stringToTerraform(struct!.sslClientCertificateArn),
        ssl_client_key_arn: cdktn.stringToTerraform(struct!.sslClientKeyArn),
        ssl_client_key_password: cdktn.stringToTerraform(struct!.sslClientKeyPassword),
        topic: cdktn.stringToTerraform(struct!.topic),
    }
}


export function ccEndpointKafkaSettingsPropertyToHclTerraform(struct?: CcEndpoint.KafkaSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        broker: {
            value: cdktn.stringToHclTerraform(struct!.broker),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        include_control_details: {
            value: cdktn.booleanToHclTerraform(struct!.includeControlDetails),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_null_and_empty: {
            value: cdktn.booleanToHclTerraform(struct!.includeNullAndEmpty),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_partition_value: {
            value: cdktn.booleanToHclTerraform(struct!.includePartitionValue),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_table_alter_operations: {
            value: cdktn.booleanToHclTerraform(struct!.includeTableAlterOperations),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_transaction_details: {
            value: cdktn.booleanToHclTerraform(struct!.includeTransactionDetails),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        message_format: {
            value: cdktn.stringToHclTerraform(struct!.messageFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_max_bytes: {
            value: cdktn.numberToHclTerraform(struct!.messageMaxBytes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        no_hex_prefix: {
            value: cdktn.booleanToHclTerraform(struct!.noHexPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        partition_include_schema_table: {
            value: cdktn.booleanToHclTerraform(struct!.partitionIncludeSchemaTable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sasl_password: {
            value: cdktn.stringToHclTerraform(struct!.saslPassword),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sasl_user_name: {
            value: cdktn.stringToHclTerraform(struct!.saslUserName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_protocol: {
            value: cdktn.stringToHclTerraform(struct!.securityProtocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_ca_certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.sslCaCertificateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_client_certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.sslClientCertificateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_client_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.sslClientKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_client_key_password: {
            value: cdktn.stringToHclTerraform(struct!.sslClientKeyPassword),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        topic: {
            value: cdktn.stringToHclTerraform(struct!.topic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointKinesisSettingsPropertyToTerraform(struct?: CcEndpoint.KinesisSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        include_control_details: cdktn.booleanToTerraform(struct!.includeControlDetails),
        include_null_and_empty: cdktn.booleanToTerraform(struct!.includeNullAndEmpty),
        include_partition_value: cdktn.booleanToTerraform(struct!.includePartitionValue),
        include_table_alter_operations: cdktn.booleanToTerraform(struct!.includeTableAlterOperations),
        include_transaction_details: cdktn.booleanToTerraform(struct!.includeTransactionDetails),
        message_format: cdktn.stringToTerraform(struct!.messageFormat),
        no_hex_prefix: cdktn.booleanToTerraform(struct!.noHexPrefix),
        partition_include_schema_table: cdktn.booleanToTerraform(struct!.partitionIncludeSchemaTable),
        service_access_role_arn: cdktn.stringToTerraform(struct!.serviceAccessRoleArn),
        stream_arn: cdktn.stringToTerraform(struct!.streamArn),
    }
}


export function ccEndpointKinesisSettingsPropertyToHclTerraform(struct?: CcEndpoint.KinesisSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        include_control_details: {
            value: cdktn.booleanToHclTerraform(struct!.includeControlDetails),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_null_and_empty: {
            value: cdktn.booleanToHclTerraform(struct!.includeNullAndEmpty),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_partition_value: {
            value: cdktn.booleanToHclTerraform(struct!.includePartitionValue),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_table_alter_operations: {
            value: cdktn.booleanToHclTerraform(struct!.includeTableAlterOperations),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        include_transaction_details: {
            value: cdktn.booleanToHclTerraform(struct!.includeTransactionDetails),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        message_format: {
            value: cdktn.stringToHclTerraform(struct!.messageFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        no_hex_prefix: {
            value: cdktn.booleanToHclTerraform(struct!.noHexPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        partition_include_schema_table: {
            value: cdktn.booleanToHclTerraform(struct!.partitionIncludeSchemaTable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        service_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.serviceAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stream_arn: {
            value: cdktn.stringToHclTerraform(struct!.streamArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointMicrosoftSqlServerSettingsPropertyToTerraform(struct?: CcEndpoint.MicrosoftSqlServerSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bcp_packet_size: cdktn.numberToTerraform(struct!.bcpPacketSize),
        control_tables_file_group: cdktn.stringToTerraform(struct!.controlTablesFileGroup),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        force_lob_lookup: cdktn.booleanToTerraform(struct!.forceLobLookup),
        password: cdktn.stringToTerraform(struct!.password),
        port: cdktn.numberToTerraform(struct!.port),
        query_single_always_on_node: cdktn.booleanToTerraform(struct!.querySingleAlwaysOnNode),
        read_backup_only: cdktn.booleanToTerraform(struct!.readBackupOnly),
        safeguard_policy: cdktn.stringToTerraform(struct!.safeguardPolicy),
        secrets_manager_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerAccessRoleArn),
        secrets_manager_secret_id: cdktn.stringToTerraform(struct!.secretsManagerSecretId),
        server_name: cdktn.stringToTerraform(struct!.serverName),
        tlog_access_mode: cdktn.stringToTerraform(struct!.tlogAccessMode),
        trim_space_in_char: cdktn.booleanToTerraform(struct!.trimSpaceInChar),
        use_bcp_full_load: cdktn.booleanToTerraform(struct!.useBcpFullLoad),
        use_third_party_backup_device: cdktn.booleanToTerraform(struct!.useThirdPartyBackupDevice),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccEndpointMicrosoftSqlServerSettingsPropertyToHclTerraform(struct?: CcEndpoint.MicrosoftSqlServerSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bcp_packet_size: {
            value: cdktn.numberToHclTerraform(struct!.bcpPacketSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        control_tables_file_group: {
            value: cdktn.stringToHclTerraform(struct!.controlTablesFileGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        force_lob_lookup: {
            value: cdktn.booleanToHclTerraform(struct!.forceLobLookup),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        password: {
            value: cdktn.stringToHclTerraform(struct!.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        query_single_always_on_node: {
            value: cdktn.booleanToHclTerraform(struct!.querySingleAlwaysOnNode),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        read_backup_only: {
            value: cdktn.booleanToHclTerraform(struct!.readBackupOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        safeguard_policy: {
            value: cdktn.stringToHclTerraform(struct!.safeguardPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerSecretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        server_name: {
            value: cdktn.stringToHclTerraform(struct!.serverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tlog_access_mode: {
            value: cdktn.stringToHclTerraform(struct!.tlogAccessMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        trim_space_in_char: {
            value: cdktn.booleanToHclTerraform(struct!.trimSpaceInChar),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        use_bcp_full_load: {
            value: cdktn.booleanToHclTerraform(struct!.useBcpFullLoad),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        use_third_party_backup_device: {
            value: cdktn.booleanToHclTerraform(struct!.useThirdPartyBackupDevice),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        username: {
            value: cdktn.stringToHclTerraform(struct!.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointMongoDbSettingsPropertyToTerraform(struct?: CcEndpoint.MongoDbSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_mechanism: cdktn.stringToTerraform(struct!.authMechanism),
        auth_source: cdktn.stringToTerraform(struct!.authSource),
        auth_type: cdktn.stringToTerraform(struct!.authType),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        docs_to_investigate: cdktn.stringToTerraform(struct!.docsToInvestigate),
        extract_doc_id: cdktn.stringToTerraform(struct!.extractDocId),
        nesting_level: cdktn.stringToTerraform(struct!.nestingLevel),
        password: cdktn.stringToTerraform(struct!.password),
        port: cdktn.numberToTerraform(struct!.port),
        secrets_manager_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerAccessRoleArn),
        secrets_manager_secret_id: cdktn.stringToTerraform(struct!.secretsManagerSecretId),
        server_name: cdktn.stringToTerraform(struct!.serverName),
        username: cdktn.stringToTerraform(struct!.username),
    }
}


export function ccEndpointMongoDbSettingsPropertyToHclTerraform(struct?: CcEndpoint.MongoDbSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_mechanism: {
            value: cdktn.stringToHclTerraform(struct!.authMechanism),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_source: {
            value: cdktn.stringToHclTerraform(struct!.authSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_type: {
            value: cdktn.stringToHclTerraform(struct!.authType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        docs_to_investigate: {
            value: cdktn.stringToHclTerraform(struct!.docsToInvestigate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        extract_doc_id: {
            value: cdktn.stringToHclTerraform(struct!.extractDocId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        nesting_level: {
            value: cdktn.stringToHclTerraform(struct!.nestingLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        password: {
            value: cdktn.stringToHclTerraform(struct!.password),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        secrets_manager_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerSecretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        server_name: {
            value: cdktn.stringToHclTerraform(struct!.serverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        username: {
            value: cdktn.stringToHclTerraform(struct!.username),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointMySqlSettingsPropertyToTerraform(struct?: CcEndpoint.MySqlSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        after_connect_script: cdktn.stringToTerraform(struct!.afterConnectScript),
        clean_source_metadata_on_mismatch: cdktn.booleanToTerraform(struct!.cleanSourceMetadataOnMismatch),
        events_poll_interval: cdktn.numberToTerraform(struct!.eventsPollInterval),
        max_file_size: cdktn.numberToTerraform(struct!.maxFileSize),
        parallel_load_threads: cdktn.numberToTerraform(struct!.parallelLoadThreads),
        secrets_manager_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerAccessRoleArn),
        secrets_manager_secret_id: cdktn.stringToTerraform(struct!.secretsManagerSecretId),
        server_timezone: cdktn.stringToTerraform(struct!.serverTimezone),
        target_db_type: cdktn.stringToTerraform(struct!.targetDbType),
    }
}


export function ccEndpointMySqlSettingsPropertyToHclTerraform(struct?: CcEndpoint.MySqlSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        after_connect_script: {
            value: cdktn.stringToHclTerraform(struct!.afterConnectScript),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        clean_source_metadata_on_mismatch: {
            value: cdktn.booleanToHclTerraform(struct!.cleanSourceMetadataOnMismatch),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        events_poll_interval: {
            value: cdktn.numberToHclTerraform(struct!.eventsPollInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_file_size: {
            value: cdktn.numberToHclTerraform(struct!.maxFileSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        parallel_load_threads: {
            value: cdktn.numberToHclTerraform(struct!.parallelLoadThreads),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        secrets_manager_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerSecretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        server_timezone: {
            value: cdktn.stringToHclTerraform(struct!.serverTimezone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_db_type: {
            value: cdktn.stringToHclTerraform(struct!.targetDbType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointNeptuneSettingsPropertyToTerraform(struct?: CcEndpoint.NeptuneSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        error_retry_duration: cdktn.numberToTerraform(struct!.errorRetryDuration),
        iam_auth_enabled: cdktn.booleanToTerraform(struct!.iamAuthEnabled),
        max_file_size: cdktn.numberToTerraform(struct!.maxFileSize),
        max_retry_count: cdktn.numberToTerraform(struct!.maxRetryCount),
        s3_bucket_folder: cdktn.stringToTerraform(struct!.s3BucketFolder),
        s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
        service_access_role_arn: cdktn.stringToTerraform(struct!.serviceAccessRoleArn),
    }
}


export function ccEndpointNeptuneSettingsPropertyToHclTerraform(struct?: CcEndpoint.NeptuneSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        error_retry_duration: {
            value: cdktn.numberToHclTerraform(struct!.errorRetryDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        iam_auth_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.iamAuthEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_file_size: {
            value: cdktn.numberToHclTerraform(struct!.maxFileSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_retry_count: {
            value: cdktn.numberToHclTerraform(struct!.maxRetryCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        s3_bucket_folder: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketFolder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.serviceAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointOracleSettingsPropertyToTerraform(struct?: CcEndpoint.OracleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_alternate_directly: cdktn.booleanToTerraform(struct!.accessAlternateDirectly),
        add_supplemental_logging: cdktn.booleanToTerraform(struct!.addSupplementalLogging),
        additional_archived_log_dest_id: cdktn.numberToTerraform(struct!.additionalArchivedLogDestId),
        allow_select_nested_tables: cdktn.booleanToTerraform(struct!.allowSelectNestedTables),
        archived_log_dest_id: cdktn.numberToTerraform(struct!.archivedLogDestId),
        archived_logs_only: cdktn.booleanToTerraform(struct!.archivedLogsOnly),
        asm_password: cdktn.stringToTerraform(struct!.asmPassword),
        asm_server: cdktn.stringToTerraform(struct!.asmServer),
        asm_user: cdktn.stringToTerraform(struct!.asmUser),
        char_length_semantics: cdktn.stringToTerraform(struct!.charLengthSemantics),
        direct_path_no_log: cdktn.booleanToTerraform(struct!.directPathNoLog),
        direct_path_parallel_load: cdktn.booleanToTerraform(struct!.directPathParallelLoad),
        enable_homogenous_tablespace: cdktn.booleanToTerraform(struct!.enableHomogenousTablespace),
        extra_archived_log_dest_ids: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.extraArchivedLogDestIds),
        fail_tasks_on_lob_truncation: cdktn.booleanToTerraform(struct!.failTasksOnLobTruncation),
        number_datatype_scale: cdktn.numberToTerraform(struct!.numberDatatypeScale),
        oracle_path_prefix: cdktn.stringToTerraform(struct!.oraclePathPrefix),
        parallel_asm_read_threads: cdktn.numberToTerraform(struct!.parallelAsmReadThreads),
        read_ahead_blocks: cdktn.numberToTerraform(struct!.readAheadBlocks),
        read_table_space_name: cdktn.booleanToTerraform(struct!.readTableSpaceName),
        replace_path_prefix: cdktn.booleanToTerraform(struct!.replacePathPrefix),
        retry_interval: cdktn.numberToTerraform(struct!.retryInterval),
        secrets_manager_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerAccessRoleArn),
        secrets_manager_oracle_asm_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerOracleAsmAccessRoleArn),
        secrets_manager_oracle_asm_secret_id: cdktn.stringToTerraform(struct!.secretsManagerOracleAsmSecretId),
        secrets_manager_secret_id: cdktn.stringToTerraform(struct!.secretsManagerSecretId),
        security_db_encryption: cdktn.stringToTerraform(struct!.securityDbEncryption),
        security_db_encryption_name: cdktn.stringToTerraform(struct!.securityDbEncryptionName),
        spatial_data_option_to_geo_json_function_name: cdktn.stringToTerraform(struct!.spatialDataOptionToGeoJsonFunctionName),
        standby_delay_time: cdktn.numberToTerraform(struct!.standbyDelayTime),
        use_alternate_folder_for_online: cdktn.booleanToTerraform(struct!.useAlternateFolderForOnline),
        use_b_file: cdktn.booleanToTerraform(struct!.useBFile),
        use_direct_path_full_load: cdktn.booleanToTerraform(struct!.useDirectPathFullLoad),
        use_logminer_reader: cdktn.booleanToTerraform(struct!.useLogminerReader),
        use_path_prefix: cdktn.stringToTerraform(struct!.usePathPrefix),
    }
}


export function ccEndpointOracleSettingsPropertyToHclTerraform(struct?: CcEndpoint.OracleSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_alternate_directly: {
            value: cdktn.booleanToHclTerraform(struct!.accessAlternateDirectly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        add_supplemental_logging: {
            value: cdktn.booleanToHclTerraform(struct!.addSupplementalLogging),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        additional_archived_log_dest_id: {
            value: cdktn.numberToHclTerraform(struct!.additionalArchivedLogDestId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        allow_select_nested_tables: {
            value: cdktn.booleanToHclTerraform(struct!.allowSelectNestedTables),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        archived_log_dest_id: {
            value: cdktn.numberToHclTerraform(struct!.archivedLogDestId),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        archived_logs_only: {
            value: cdktn.booleanToHclTerraform(struct!.archivedLogsOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        asm_password: {
            value: cdktn.stringToHclTerraform(struct!.asmPassword),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        asm_server: {
            value: cdktn.stringToHclTerraform(struct!.asmServer),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        asm_user: {
            value: cdktn.stringToHclTerraform(struct!.asmUser),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        char_length_semantics: {
            value: cdktn.stringToHclTerraform(struct!.charLengthSemantics),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        direct_path_no_log: {
            value: cdktn.booleanToHclTerraform(struct!.directPathNoLog),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        direct_path_parallel_load: {
            value: cdktn.booleanToHclTerraform(struct!.directPathParallelLoad),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enable_homogenous_tablespace: {
            value: cdktn.booleanToHclTerraform(struct!.enableHomogenousTablespace),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        extra_archived_log_dest_ids: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.extraArchivedLogDestIds),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        fail_tasks_on_lob_truncation: {
            value: cdktn.booleanToHclTerraform(struct!.failTasksOnLobTruncation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        number_datatype_scale: {
            value: cdktn.numberToHclTerraform(struct!.numberDatatypeScale),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        oracle_path_prefix: {
            value: cdktn.stringToHclTerraform(struct!.oraclePathPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parallel_asm_read_threads: {
            value: cdktn.numberToHclTerraform(struct!.parallelAsmReadThreads),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        read_ahead_blocks: {
            value: cdktn.numberToHclTerraform(struct!.readAheadBlocks),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        read_table_space_name: {
            value: cdktn.booleanToHclTerraform(struct!.readTableSpaceName),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        replace_path_prefix: {
            value: cdktn.booleanToHclTerraform(struct!.replacePathPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        retry_interval: {
            value: cdktn.numberToHclTerraform(struct!.retryInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        secrets_manager_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_oracle_asm_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerOracleAsmAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_oracle_asm_secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerOracleAsmSecretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerSecretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_db_encryption: {
            value: cdktn.stringToHclTerraform(struct!.securityDbEncryption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_db_encryption_name: {
            value: cdktn.stringToHclTerraform(struct!.securityDbEncryptionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        spatial_data_option_to_geo_json_function_name: {
            value: cdktn.stringToHclTerraform(struct!.spatialDataOptionToGeoJsonFunctionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        standby_delay_time: {
            value: cdktn.numberToHclTerraform(struct!.standbyDelayTime),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        use_alternate_folder_for_online: {
            value: cdktn.booleanToHclTerraform(struct!.useAlternateFolderForOnline),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        use_b_file: {
            value: cdktn.booleanToHclTerraform(struct!.useBFile),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        use_direct_path_full_load: {
            value: cdktn.booleanToHclTerraform(struct!.useDirectPathFullLoad),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        use_logminer_reader: {
            value: cdktn.booleanToHclTerraform(struct!.useLogminerReader),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        use_path_prefix: {
            value: cdktn.stringToHclTerraform(struct!.usePathPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointPostgreSqlSettingsPropertyToTerraform(struct?: CcEndpoint.PostgreSqlSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        after_connect_script: cdktn.stringToTerraform(struct!.afterConnectScript),
        babelfish_database_name: cdktn.stringToTerraform(struct!.babelfishDatabaseName),
        capture_ddls: cdktn.booleanToTerraform(struct!.captureDdls),
        database_mode: cdktn.stringToTerraform(struct!.databaseMode),
        ddl_artifacts_schema: cdktn.stringToTerraform(struct!.ddlArtifactsSchema),
        execute_timeout: cdktn.numberToTerraform(struct!.executeTimeout),
        fail_tasks_on_lob_truncation: cdktn.booleanToTerraform(struct!.failTasksOnLobTruncation),
        heartbeat_enable: cdktn.booleanToTerraform(struct!.heartbeatEnable),
        heartbeat_frequency: cdktn.numberToTerraform(struct!.heartbeatFrequency),
        heartbeat_schema: cdktn.stringToTerraform(struct!.heartbeatSchema),
        map_boolean_as_boolean: cdktn.booleanToTerraform(struct!.mapBooleanAsBoolean),
        max_file_size: cdktn.numberToTerraform(struct!.maxFileSize),
        plugin_name: cdktn.stringToTerraform(struct!.pluginName),
        secrets_manager_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerAccessRoleArn),
        secrets_manager_secret_id: cdktn.stringToTerraform(struct!.secretsManagerSecretId),
        slot_name: cdktn.stringToTerraform(struct!.slotName),
    }
}


export function ccEndpointPostgreSqlSettingsPropertyToHclTerraform(struct?: CcEndpoint.PostgreSqlSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        after_connect_script: {
            value: cdktn.stringToHclTerraform(struct!.afterConnectScript),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        babelfish_database_name: {
            value: cdktn.stringToHclTerraform(struct!.babelfishDatabaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        capture_ddls: {
            value: cdktn.booleanToHclTerraform(struct!.captureDdls),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        database_mode: {
            value: cdktn.stringToHclTerraform(struct!.databaseMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ddl_artifacts_schema: {
            value: cdktn.stringToHclTerraform(struct!.ddlArtifactsSchema),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        execute_timeout: {
            value: cdktn.numberToHclTerraform(struct!.executeTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        fail_tasks_on_lob_truncation: {
            value: cdktn.booleanToHclTerraform(struct!.failTasksOnLobTruncation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        heartbeat_enable: {
            value: cdktn.booleanToHclTerraform(struct!.heartbeatEnable),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        heartbeat_frequency: {
            value: cdktn.numberToHclTerraform(struct!.heartbeatFrequency),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        heartbeat_schema: {
            value: cdktn.stringToHclTerraform(struct!.heartbeatSchema),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        map_boolean_as_boolean: {
            value: cdktn.booleanToHclTerraform(struct!.mapBooleanAsBoolean),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_file_size: {
            value: cdktn.numberToHclTerraform(struct!.maxFileSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        plugin_name: {
            value: cdktn.stringToHclTerraform(struct!.pluginName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerSecretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        slot_name: {
            value: cdktn.stringToHclTerraform(struct!.slotName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointRedisSettingsPropertyToTerraform(struct?: CcEndpoint.RedisSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_password: cdktn.stringToTerraform(struct!.authPassword),
        auth_type: cdktn.stringToTerraform(struct!.authType),
        auth_user_name: cdktn.stringToTerraform(struct!.authUserName),
        port: cdktn.numberToTerraform(struct!.port),
        server_name: cdktn.stringToTerraform(struct!.serverName),
        ssl_ca_certificate_arn: cdktn.stringToTerraform(struct!.sslCaCertificateArn),
        ssl_security_protocol: cdktn.stringToTerraform(struct!.sslSecurityProtocol),
    }
}


export function ccEndpointRedisSettingsPropertyToHclTerraform(struct?: CcEndpoint.RedisSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_password: {
            value: cdktn.stringToHclTerraform(struct!.authPassword),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_type: {
            value: cdktn.stringToHclTerraform(struct!.authType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        auth_user_name: {
            value: cdktn.stringToHclTerraform(struct!.authUserName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.numberToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        server_name: {
            value: cdktn.stringToHclTerraform(struct!.serverName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_ca_certificate_arn: {
            value: cdktn.stringToHclTerraform(struct!.sslCaCertificateArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ssl_security_protocol: {
            value: cdktn.stringToHclTerraform(struct!.sslSecurityProtocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointRedshiftSettingsPropertyToTerraform(struct?: CcEndpoint.RedshiftSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accept_any_date: cdktn.booleanToTerraform(struct!.acceptAnyDate),
        after_connect_script: cdktn.stringToTerraform(struct!.afterConnectScript),
        bucket_folder: cdktn.stringToTerraform(struct!.bucketFolder),
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        case_sensitive_names: cdktn.booleanToTerraform(struct!.caseSensitiveNames),
        comp_update: cdktn.booleanToTerraform(struct!.compUpdate),
        connection_timeout: cdktn.numberToTerraform(struct!.connectionTimeout),
        date_format: cdktn.stringToTerraform(struct!.dateFormat),
        empty_as_null: cdktn.booleanToTerraform(struct!.emptyAsNull),
        encryption_mode: cdktn.stringToTerraform(struct!.encryptionMode),
        explicit_ids: cdktn.booleanToTerraform(struct!.explicitIds),
        file_transfer_upload_streams: cdktn.numberToTerraform(struct!.fileTransferUploadStreams),
        load_timeout: cdktn.numberToTerraform(struct!.loadTimeout),
        map_boolean_as_boolean: cdktn.booleanToTerraform(struct!.mapBooleanAsBoolean),
        max_file_size: cdktn.numberToTerraform(struct!.maxFileSize),
        remove_quotes: cdktn.booleanToTerraform(struct!.removeQuotes),
        replace_chars: cdktn.stringToTerraform(struct!.replaceChars),
        replace_invalid_chars: cdktn.stringToTerraform(struct!.replaceInvalidChars),
        secrets_manager_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerAccessRoleArn),
        secrets_manager_secret_id: cdktn.stringToTerraform(struct!.secretsManagerSecretId),
        server_side_encryption_kms_key_id: cdktn.stringToTerraform(struct!.serverSideEncryptionKmsKeyId),
        service_access_role_arn: cdktn.stringToTerraform(struct!.serviceAccessRoleArn),
        time_format: cdktn.stringToTerraform(struct!.timeFormat),
        trim_blanks: cdktn.booleanToTerraform(struct!.trimBlanks),
        truncate_columns: cdktn.booleanToTerraform(struct!.truncateColumns),
        write_buffer_size: cdktn.numberToTerraform(struct!.writeBufferSize),
    }
}


export function ccEndpointRedshiftSettingsPropertyToHclTerraform(struct?: CcEndpoint.RedshiftSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accept_any_date: {
            value: cdktn.booleanToHclTerraform(struct!.acceptAnyDate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        after_connect_script: {
            value: cdktn.stringToHclTerraform(struct!.afterConnectScript),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_folder: {
            value: cdktn.stringToHclTerraform(struct!.bucketFolder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        case_sensitive_names: {
            value: cdktn.booleanToHclTerraform(struct!.caseSensitiveNames),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        comp_update: {
            value: cdktn.booleanToHclTerraform(struct!.compUpdate),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        connection_timeout: {
            value: cdktn.numberToHclTerraform(struct!.connectionTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        date_format: {
            value: cdktn.stringToHclTerraform(struct!.dateFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        empty_as_null: {
            value: cdktn.booleanToHclTerraform(struct!.emptyAsNull),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        encryption_mode: {
            value: cdktn.stringToHclTerraform(struct!.encryptionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        explicit_ids: {
            value: cdktn.booleanToHclTerraform(struct!.explicitIds),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        file_transfer_upload_streams: {
            value: cdktn.numberToHclTerraform(struct!.fileTransferUploadStreams),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        load_timeout: {
            value: cdktn.numberToHclTerraform(struct!.loadTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        map_boolean_as_boolean: {
            value: cdktn.booleanToHclTerraform(struct!.mapBooleanAsBoolean),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_file_size: {
            value: cdktn.numberToHclTerraform(struct!.maxFileSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        remove_quotes: {
            value: cdktn.booleanToHclTerraform(struct!.removeQuotes),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        replace_chars: {
            value: cdktn.stringToHclTerraform(struct!.replaceChars),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        replace_invalid_chars: {
            value: cdktn.stringToHclTerraform(struct!.replaceInvalidChars),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerSecretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        server_side_encryption_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.serverSideEncryptionKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.serviceAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_format: {
            value: cdktn.stringToHclTerraform(struct!.timeFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        trim_blanks: {
            value: cdktn.booleanToHclTerraform(struct!.trimBlanks),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        truncate_columns: {
            value: cdktn.booleanToHclTerraform(struct!.truncateColumns),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        write_buffer_size: {
            value: cdktn.numberToHclTerraform(struct!.writeBufferSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointS3SettingsPropertyToTerraform(struct?: CcEndpoint.S3SettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        add_column_name: cdktn.booleanToTerraform(struct!.addColumnName),
        add_trailing_padding_character: cdktn.booleanToTerraform(struct!.addTrailingPaddingCharacter),
        bucket_folder: cdktn.stringToTerraform(struct!.bucketFolder),
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        canned_acl_for_objects: cdktn.stringToTerraform(struct!.cannedAclForObjects),
        cdc_inserts_and_updates: cdktn.booleanToTerraform(struct!.cdcInsertsAndUpdates),
        cdc_inserts_only: cdktn.booleanToTerraform(struct!.cdcInsertsOnly),
        cdc_max_batch_interval: cdktn.numberToTerraform(struct!.cdcMaxBatchInterval),
        cdc_min_file_size: cdktn.numberToTerraform(struct!.cdcMinFileSize),
        cdc_path: cdktn.stringToTerraform(struct!.cdcPath),
        compression_type: cdktn.stringToTerraform(struct!.compressionType),
        csv_delimiter: cdktn.stringToTerraform(struct!.csvDelimiter),
        csv_no_sup_value: cdktn.stringToTerraform(struct!.csvNoSupValue),
        csv_null_value: cdktn.stringToTerraform(struct!.csvNullValue),
        csv_row_delimiter: cdktn.stringToTerraform(struct!.csvRowDelimiter),
        data_format: cdktn.stringToTerraform(struct!.dataFormat),
        data_page_size: cdktn.numberToTerraform(struct!.dataPageSize),
        date_partition_delimiter: cdktn.stringToTerraform(struct!.datePartitionDelimiter),
        date_partition_enabled: cdktn.booleanToTerraform(struct!.datePartitionEnabled),
        date_partition_sequence: cdktn.stringToTerraform(struct!.datePartitionSequence),
        date_partition_timezone: cdktn.stringToTerraform(struct!.datePartitionTimezone),
        dict_page_size_limit: cdktn.numberToTerraform(struct!.dictPageSizeLimit),
        enable_statistics: cdktn.booleanToTerraform(struct!.enableStatistics),
        encoding_type: cdktn.stringToTerraform(struct!.encodingType),
        encryption_mode: cdktn.stringToTerraform(struct!.encryptionMode),
        expected_bucket_owner: cdktn.stringToTerraform(struct!.expectedBucketOwner),
        external_table_definition: cdktn.stringToTerraform(struct!.externalTableDefinition),
        glue_catalog_generation: cdktn.booleanToTerraform(struct!.glueCatalogGeneration),
        ignore_header_rows: cdktn.numberToTerraform(struct!.ignoreHeaderRows),
        include_op_for_full_load: cdktn.booleanToTerraform(struct!.includeOpForFullLoad),
        max_file_size: cdktn.numberToTerraform(struct!.maxFileSize),
        parquet_timestamp_in_millisecond: cdktn.booleanToTerraform(struct!.parquetTimestampInMillisecond),
        parquet_version: cdktn.stringToTerraform(struct!.parquetVersion),
        preserve_transactions: cdktn.booleanToTerraform(struct!.preserveTransactions),
        rfc_4180: cdktn.booleanToTerraform(struct!.rfc4180),
        row_group_length: cdktn.numberToTerraform(struct!.rowGroupLength),
        server_side_encryption_kms_key_id: cdktn.stringToTerraform(struct!.serverSideEncryptionKmsKeyId),
        service_access_role_arn: cdktn.stringToTerraform(struct!.serviceAccessRoleArn),
        timestamp_column_name: cdktn.stringToTerraform(struct!.timestampColumnName),
        use_csv_no_sup_value: cdktn.booleanToTerraform(struct!.useCsvNoSupValue),
        use_task_start_time_for_full_load_timestamp: cdktn.booleanToTerraform(struct!.useTaskStartTimeForFullLoadTimestamp),
    }
}


export function ccEndpointS3SettingsPropertyToHclTerraform(struct?: CcEndpoint.S3SettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        add_column_name: {
            value: cdktn.booleanToHclTerraform(struct!.addColumnName),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        add_trailing_padding_character: {
            value: cdktn.booleanToHclTerraform(struct!.addTrailingPaddingCharacter),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        bucket_folder: {
            value: cdktn.stringToHclTerraform(struct!.bucketFolder),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        canned_acl_for_objects: {
            value: cdktn.stringToHclTerraform(struct!.cannedAclForObjects),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cdc_inserts_and_updates: {
            value: cdktn.booleanToHclTerraform(struct!.cdcInsertsAndUpdates),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cdc_inserts_only: {
            value: cdktn.booleanToHclTerraform(struct!.cdcInsertsOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cdc_max_batch_interval: {
            value: cdktn.numberToHclTerraform(struct!.cdcMaxBatchInterval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        cdc_min_file_size: {
            value: cdktn.numberToHclTerraform(struct!.cdcMinFileSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        cdc_path: {
            value: cdktn.stringToHclTerraform(struct!.cdcPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        compression_type: {
            value: cdktn.stringToHclTerraform(struct!.compressionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        csv_delimiter: {
            value: cdktn.stringToHclTerraform(struct!.csvDelimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        csv_no_sup_value: {
            value: cdktn.stringToHclTerraform(struct!.csvNoSupValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        csv_null_value: {
            value: cdktn.stringToHclTerraform(struct!.csvNullValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        csv_row_delimiter: {
            value: cdktn.stringToHclTerraform(struct!.csvRowDelimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_format: {
            value: cdktn.stringToHclTerraform(struct!.dataFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_page_size: {
            value: cdktn.numberToHclTerraform(struct!.dataPageSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        date_partition_delimiter: {
            value: cdktn.stringToHclTerraform(struct!.datePartitionDelimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        date_partition_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.datePartitionEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        date_partition_sequence: {
            value: cdktn.stringToHclTerraform(struct!.datePartitionSequence),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        date_partition_timezone: {
            value: cdktn.stringToHclTerraform(struct!.datePartitionTimezone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dict_page_size_limit: {
            value: cdktn.numberToHclTerraform(struct!.dictPageSizeLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        enable_statistics: {
            value: cdktn.booleanToHclTerraform(struct!.enableStatistics),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        encoding_type: {
            value: cdktn.stringToHclTerraform(struct!.encodingType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encryption_mode: {
            value: cdktn.stringToHclTerraform(struct!.encryptionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        expected_bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.expectedBucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        external_table_definition: {
            value: cdktn.stringToHclTerraform(struct!.externalTableDefinition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        glue_catalog_generation: {
            value: cdktn.booleanToHclTerraform(struct!.glueCatalogGeneration),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ignore_header_rows: {
            value: cdktn.numberToHclTerraform(struct!.ignoreHeaderRows),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        include_op_for_full_load: {
            value: cdktn.booleanToHclTerraform(struct!.includeOpForFullLoad),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        max_file_size: {
            value: cdktn.numberToHclTerraform(struct!.maxFileSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        parquet_timestamp_in_millisecond: {
            value: cdktn.booleanToHclTerraform(struct!.parquetTimestampInMillisecond),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        parquet_version: {
            value: cdktn.stringToHclTerraform(struct!.parquetVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        preserve_transactions: {
            value: cdktn.booleanToHclTerraform(struct!.preserveTransactions),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        rfc_4180: {
            value: cdktn.booleanToHclTerraform(struct!.rfc4180),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        row_group_length: {
            value: cdktn.numberToHclTerraform(struct!.rowGroupLength),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        server_side_encryption_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.serverSideEncryptionKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.serviceAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timestamp_column_name: {
            value: cdktn.stringToHclTerraform(struct!.timestampColumnName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_csv_no_sup_value: {
            value: cdktn.booleanToHclTerraform(struct!.useCsvNoSupValue),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        use_task_start_time_for_full_load_timestamp: {
            value: cdktn.booleanToHclTerraform(struct!.useTaskStartTimeForFullLoadTimestamp),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointSybaseSettingsPropertyToTerraform(struct?: CcEndpoint.SybaseSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secrets_manager_access_role_arn: cdktn.stringToTerraform(struct!.secretsManagerAccessRoleArn),
        secrets_manager_secret_id: cdktn.stringToTerraform(struct!.secretsManagerSecretId),
    }
}


export function ccEndpointSybaseSettingsPropertyToHclTerraform(struct?: CcEndpoint.SybaseSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        secrets_manager_access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerAccessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secrets_manager_secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretsManagerSecretId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccEndpointTagPropertyToTerraform(struct?: CcEndpoint.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccEndpointTagPropertyToHclTerraform(struct?: CcEndpoint.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcEndpoint {
export interface DocDbSettingsProperty {
    /**
    * Indicates the number of documents to preview to determine the document organization. Use this setting when NestingLevel is set to "one".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#docs_to_investigate CcEndpoint#docs_to_investigate}
    */
    readonly docsToInvestigate?: number;
    /**
    * Specifies the document ID. Use this setting when NestingLevel is set to "none"
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#extract_doc_id CcEndpoint#extract_doc_id}
    */
    readonly extractDocId?: boolean | cdktn.IResolvable;
    /**
    * Specifies either document or table mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#nesting_level CcEndpoint#nesting_level}
    */
    readonly nestingLevel?: string;
    /**
    * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the DocumentDB endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_access_role_arn CcEndpoint#secrets_manager_access_role_arn}
    */
    readonly secretsManagerAccessRoleArn?: string;
    /**
    * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the DocumentDB endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_secret_id CcEndpoint#secrets_manager_secret_id}
    */
    readonly secretsManagerSecretId?: string;
}
export class DocDbSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DocDbSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._docsToInvestigate !== undefined) {
            hasAnyValues = true;
            internalValueResult.docsToInvestigate = this._docsToInvestigate;
        }
        if (this._extractDocId !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractDocId = this._extractDocId;
        }
        if (this._nestingLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.nestingLevel = this._nestingLevel;
        }
        if (this._secretsManagerAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerAccessRoleArn = this._secretsManagerAccessRoleArn;
        }
        if (this._secretsManagerSecretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerSecretId = this._secretsManagerSecretId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DocDbSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._docsToInvestigate = undefined;
            this._extractDocId = undefined;
            this._nestingLevel = undefined;
            this._secretsManagerAccessRoleArn = undefined;
            this._secretsManagerSecretId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._docsToInvestigate = value.docsToInvestigate;
            this._extractDocId = value.extractDocId;
            this._nestingLevel = value.nestingLevel;
            this._secretsManagerAccessRoleArn = value.secretsManagerAccessRoleArn;
            this._secretsManagerSecretId = value.secretsManagerSecretId;
        }
    }

    // docs_to_investigate - computed: true, optional: true, required: false
    private _docsToInvestigate?: number; 
    public get docsToInvestigate() {
        return this.getNumberAttribute('docs_to_investigate');
    }
    public set docsToInvestigate(value: number) {
        this._docsToInvestigate = value;
    }
    public resetDocsToInvestigate() {
        this._docsToInvestigate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get docsToInvestigateInput() {
        return this._docsToInvestigate;
    }

    // extract_doc_id - computed: true, optional: true, required: false
    private _extractDocId?: boolean | cdktn.IResolvable; 
    public get extractDocId() {
        return this.getBooleanAttribute('extract_doc_id');
    }
    public set extractDocId(value: boolean | cdktn.IResolvable) {
        this._extractDocId = value;
    }
    public resetExtractDocId() {
        this._extractDocId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractDocIdInput() {
        return this._extractDocId;
    }

    // nesting_level - computed: true, optional: true, required: false
    private _nestingLevel?: string; 
    public get nestingLevel() {
        return this.getStringAttribute('nesting_level');
    }
    public set nestingLevel(value: string) {
        this._nestingLevel = value;
    }
    public resetNestingLevel() {
        this._nestingLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nestingLevelInput() {
        return this._nestingLevel;
    }

    // secrets_manager_access_role_arn - computed: true, optional: true, required: false
    private _secretsManagerAccessRoleArn?: string; 
    public get secretsManagerAccessRoleArn() {
        return this.getStringAttribute('secrets_manager_access_role_arn');
    }
    public set secretsManagerAccessRoleArn(value: string) {
        this._secretsManagerAccessRoleArn = value;
    }
    public resetSecretsManagerAccessRoleArn() {
        this._secretsManagerAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerAccessRoleArnInput() {
        return this._secretsManagerAccessRoleArn;
    }

    // secrets_manager_secret_id - computed: true, optional: true, required: false
    private _secretsManagerSecretId?: string; 
    public get secretsManagerSecretId() {
        return this.getStringAttribute('secrets_manager_secret_id');
    }
    public set secretsManagerSecretId(value: string) {
        this._secretsManagerSecretId = value;
    }
    public resetSecretsManagerSecretId() {
        this._secretsManagerSecretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerSecretIdInput() {
        return this._secretsManagerSecretId;
    }
}
export interface DynamoDbSettingsProperty {
    /**
    * The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the iam:PassRole action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#service_access_role_arn CcEndpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn?: string;
}
export class DynamoDbSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynamoDbSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._serviceAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynamoDbSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._serviceAccessRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._serviceAccessRoleArn = value.serviceAccessRoleArn;
        }
    }

    // service_access_role_arn - computed: true, optional: true, required: false
    private _serviceAccessRoleArn?: string; 
    public get serviceAccessRoleArn() {
        return this.getStringAttribute('service_access_role_arn');
    }
    public set serviceAccessRoleArn(value: string) {
        this._serviceAccessRoleArn = value;
    }
    public resetServiceAccessRoleArn() {
        this._serviceAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccessRoleArnInput() {
        return this._serviceAccessRoleArn;
    }
}
export interface ElasticsearchSettingsProperty {
    /**
    * The endpoint for the OpenSearch cluster. AWS DMS uses HTTPS if a transport protocol (either HTTP or HTTPS) isn't specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#endpoint_uri CcEndpoint#endpoint_uri}
    */
    readonly endpointUri?: string;
    /**
    * The maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#error_retry_duration CcEndpoint#error_retry_duration}
    */
    readonly errorRetryDuration?: number;
    /**
    * The maximum percentage of records that can fail to be written before a full load operation stops.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#full_load_error_percentage CcEndpoint#full_load_error_percentage}
    */
    readonly fullLoadErrorPercentage?: number;
    /**
    * The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the iam:PassRole action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#service_access_role_arn CcEndpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn?: string;
}
export class ElasticsearchSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ElasticsearchSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpointUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointUri = this._endpointUri;
        }
        if (this._errorRetryDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorRetryDuration = this._errorRetryDuration;
        }
        if (this._fullLoadErrorPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.fullLoadErrorPercentage = this._fullLoadErrorPercentage;
        }
        if (this._serviceAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ElasticsearchSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpointUri = undefined;
            this._errorRetryDuration = undefined;
            this._fullLoadErrorPercentage = undefined;
            this._serviceAccessRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpointUri = value.endpointUri;
            this._errorRetryDuration = value.errorRetryDuration;
            this._fullLoadErrorPercentage = value.fullLoadErrorPercentage;
            this._serviceAccessRoleArn = value.serviceAccessRoleArn;
        }
    }

    // endpoint_uri - computed: true, optional: true, required: false
    private _endpointUri?: string; 
    public get endpointUri() {
        return this.getStringAttribute('endpoint_uri');
    }
    public set endpointUri(value: string) {
        this._endpointUri = value;
    }
    public resetEndpointUri() {
        this._endpointUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointUriInput() {
        return this._endpointUri;
    }

    // error_retry_duration - computed: true, optional: true, required: false
    private _errorRetryDuration?: number; 
    public get errorRetryDuration() {
        return this.getNumberAttribute('error_retry_duration');
    }
    public set errorRetryDuration(value: number) {
        this._errorRetryDuration = value;
    }
    public resetErrorRetryDuration() {
        this._errorRetryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorRetryDurationInput() {
        return this._errorRetryDuration;
    }

    // full_load_error_percentage - computed: true, optional: true, required: false
    private _fullLoadErrorPercentage?: number; 
    public get fullLoadErrorPercentage() {
        return this.getNumberAttribute('full_load_error_percentage');
    }
    public set fullLoadErrorPercentage(value: number) {
        this._fullLoadErrorPercentage = value;
    }
    public resetFullLoadErrorPercentage() {
        this._fullLoadErrorPercentage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fullLoadErrorPercentageInput() {
        return this._fullLoadErrorPercentage;
    }

    // service_access_role_arn - computed: true, optional: true, required: false
    private _serviceAccessRoleArn?: string; 
    public get serviceAccessRoleArn() {
        return this.getStringAttribute('service_access_role_arn');
    }
    public set serviceAccessRoleArn(value: string) {
        this._serviceAccessRoleArn = value;
    }
    public resetServiceAccessRoleArn() {
        this._serviceAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccessRoleArnInput() {
        return this._serviceAccessRoleArn;
    }
}
export interface GcpMySQLSettingsProperty {
    /**
    * Specifies a script to run immediately after AWS DMS connects to the endpoint. The migration task continues running regardless if the SQL statement succeeds or fails.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#after_connect_script CcEndpoint#after_connect_script}
    */
    readonly afterConnectScript?: string;
    /**
    * Adjusts the behavior of AWS DMS when migrating from an SQL Server source database that is hosted as part of an Always On availability group cluster. If you need AWS DMS to poll all the nodes in the Always On cluster for transaction backups, set this attribute to false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#clean_source_metadata_on_mismatch CcEndpoint#clean_source_metadata_on_mismatch}
    */
    readonly cleanSourceMetadataOnMismatch?: boolean | cdktn.IResolvable;
    /**
    * Database name for the endpoint. For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on either the CreateEndpoint or ModifyEndpoint API call. Specifying DatabaseName when you create or modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the AWS DMS task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#database_name CcEndpoint#database_name}
    */
    readonly databaseName?: string;
    /**
    * Specifies how often to check the binary log for new changes/events when the database is idle. The default is five seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#events_poll_interval CcEndpoint#events_poll_interval}
    */
    readonly eventsPollInterval?: number;
    /**
    * Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#max_file_size CcEndpoint#max_file_size}
    */
    readonly maxFileSize?: number;
    /**
    * Improves performance when loading data into the MySQL-compatible target database. Specifies how many threads to use to load the data into the MySQL-compatible target database. Setting a large number of threads can have an adverse effect on database performance, because a separate connection is required for each thread. The default is one.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#parallel_load_threads CcEndpoint#parallel_load_threads}
    */
    readonly parallelLoadThreads?: number;
    /**
    * Endpoint connection password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#password CcEndpoint#password}
    */
    readonly password?: string;
    /**
    * The port used by the endpoint database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#port CcEndpoint#port}
    */
    readonly port?: number;
    /**
    * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the MySQL endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_access_role_arn CcEndpoint#secrets_manager_access_role_arn}
    */
    readonly secretsManagerAccessRoleArn?: string;
    /**
    * The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_secret_id CcEndpoint#secrets_manager_secret_id}
    */
    readonly secretsManagerSecretId?: string;
    /**
    * The MySQL host name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#server_name CcEndpoint#server_name}
    */
    readonly serverName?: string;
    /**
    * Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#server_timezone CcEndpoint#server_timezone}
    */
    readonly serverTimezone?: string;
    /**
    * Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#username CcEndpoint#username}
    */
    readonly username?: string;
}
export class GcpMySQLSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GcpMySQLSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._afterConnectScript !== undefined) {
            hasAnyValues = true;
            internalValueResult.afterConnectScript = this._afterConnectScript;
        }
        if (this._cleanSourceMetadataOnMismatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.cleanSourceMetadataOnMismatch = this._cleanSourceMetadataOnMismatch;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._eventsPollInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventsPollInterval = this._eventsPollInterval;
        }
        if (this._maxFileSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxFileSize = this._maxFileSize;
        }
        if (this._parallelLoadThreads !== undefined) {
            hasAnyValues = true;
            internalValueResult.parallelLoadThreads = this._parallelLoadThreads;
        }
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._secretsManagerAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerAccessRoleArn = this._secretsManagerAccessRoleArn;
        }
        if (this._secretsManagerSecretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerSecretId = this._secretsManagerSecretId;
        }
        if (this._serverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverName = this._serverName;
        }
        if (this._serverTimezone !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverTimezone = this._serverTimezone;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GcpMySQLSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._afterConnectScript = undefined;
            this._cleanSourceMetadataOnMismatch = undefined;
            this._databaseName = undefined;
            this._eventsPollInterval = undefined;
            this._maxFileSize = undefined;
            this._parallelLoadThreads = undefined;
            this._password = undefined;
            this._port = undefined;
            this._secretsManagerAccessRoleArn = undefined;
            this._secretsManagerSecretId = undefined;
            this._serverName = undefined;
            this._serverTimezone = undefined;
            this._username = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._afterConnectScript = value.afterConnectScript;
            this._cleanSourceMetadataOnMismatch = value.cleanSourceMetadataOnMismatch;
            this._databaseName = value.databaseName;
            this._eventsPollInterval = value.eventsPollInterval;
            this._maxFileSize = value.maxFileSize;
            this._parallelLoadThreads = value.parallelLoadThreads;
            this._password = value.password;
            this._port = value.port;
            this._secretsManagerAccessRoleArn = value.secretsManagerAccessRoleArn;
            this._secretsManagerSecretId = value.secretsManagerSecretId;
            this._serverName = value.serverName;
            this._serverTimezone = value.serverTimezone;
            this._username = value.username;
        }
    }

    // after_connect_script - computed: true, optional: true, required: false
    private _afterConnectScript?: string; 
    public get afterConnectScript() {
        return this.getStringAttribute('after_connect_script');
    }
    public set afterConnectScript(value: string) {
        this._afterConnectScript = value;
    }
    public resetAfterConnectScript() {
        this._afterConnectScript = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get afterConnectScriptInput() {
        return this._afterConnectScript;
    }

    // clean_source_metadata_on_mismatch - computed: true, optional: true, required: false
    private _cleanSourceMetadataOnMismatch?: boolean | cdktn.IResolvable; 
    public get cleanSourceMetadataOnMismatch() {
        return this.getBooleanAttribute('clean_source_metadata_on_mismatch');
    }
    public set cleanSourceMetadataOnMismatch(value: boolean | cdktn.IResolvable) {
        this._cleanSourceMetadataOnMismatch = value;
    }
    public resetCleanSourceMetadataOnMismatch() {
        this._cleanSourceMetadataOnMismatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cleanSourceMetadataOnMismatchInput() {
        return this._cleanSourceMetadataOnMismatch;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // events_poll_interval - computed: true, optional: true, required: false
    private _eventsPollInterval?: number; 
    public get eventsPollInterval() {
        return this.getNumberAttribute('events_poll_interval');
    }
    public set eventsPollInterval(value: number) {
        this._eventsPollInterval = value;
    }
    public resetEventsPollInterval() {
        this._eventsPollInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventsPollIntervalInput() {
        return this._eventsPollInterval;
    }

    // max_file_size - computed: true, optional: true, required: false
    private _maxFileSize?: number; 
    public get maxFileSize() {
        return this.getNumberAttribute('max_file_size');
    }
    public set maxFileSize(value: number) {
        this._maxFileSize = value;
    }
    public resetMaxFileSize() {
        this._maxFileSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxFileSizeInput() {
        return this._maxFileSize;
    }

    // parallel_load_threads - computed: true, optional: true, required: false
    private _parallelLoadThreads?: number; 
    public get parallelLoadThreads() {
        return this.getNumberAttribute('parallel_load_threads');
    }
    public set parallelLoadThreads(value: number) {
        this._parallelLoadThreads = value;
    }
    public resetParallelLoadThreads() {
        this._parallelLoadThreads = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parallelLoadThreadsInput() {
        return this._parallelLoadThreads;
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // secrets_manager_access_role_arn - computed: true, optional: true, required: false
    private _secretsManagerAccessRoleArn?: string; 
    public get secretsManagerAccessRoleArn() {
        return this.getStringAttribute('secrets_manager_access_role_arn');
    }
    public set secretsManagerAccessRoleArn(value: string) {
        this._secretsManagerAccessRoleArn = value;
    }
    public resetSecretsManagerAccessRoleArn() {
        this._secretsManagerAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerAccessRoleArnInput() {
        return this._secretsManagerAccessRoleArn;
    }

    // secrets_manager_secret_id - computed: true, optional: true, required: false
    private _secretsManagerSecretId?: string; 
    public get secretsManagerSecretId() {
        return this.getStringAttribute('secrets_manager_secret_id');
    }
    public set secretsManagerSecretId(value: string) {
        this._secretsManagerSecretId = value;
    }
    public resetSecretsManagerSecretId() {
        this._secretsManagerSecretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerSecretIdInput() {
        return this._secretsManagerSecretId;
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // server_timezone - computed: true, optional: true, required: false
    private _serverTimezone?: string; 
    public get serverTimezone() {
        return this.getStringAttribute('server_timezone');
    }
    public set serverTimezone(value: string) {
        this._serverTimezone = value;
    }
    public resetServerTimezone() {
        this._serverTimezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverTimezoneInput() {
        return this._serverTimezone;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }
}
export interface IbmDb2SettingsProperty {
    /**
    * For ongoing replication (CDC), use CurrentLSN to specify a log sequence number (LSN) where you want the replication to start.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#current_lsn CcEndpoint#current_lsn}
    */
    readonly currentLsn?: string;
    /**
    * If true, AWS DMS saves any .csv files to the Db2 LUW target that were used to replicate data. DMS uses these files for analysis and troubleshooting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#keep_csv_files CcEndpoint#keep_csv_files}
    */
    readonly keepCsvFiles?: boolean | cdktn.IResolvable;
    /**
    * The amount of time (in milliseconds) before AWS DMS times out operations performed by DMS on the Db2 target. The default value is 1200 (20 minutes).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#load_timeout CcEndpoint#load_timeout}
    */
    readonly loadTimeout?: number;
    /**
    * Specifies the maximum size (in KB) of .csv files used to transfer data to Db2 LUW.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#max_file_size CcEndpoint#max_file_size}
    */
    readonly maxFileSize?: number;
    /**
    * Maximum number of bytes per read, as a NUMBER value. The default is 64 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#max_k_bytes_per_read CcEndpoint#max_k_bytes_per_read}
    */
    readonly maxKBytesPerRead?: number;
    /**
    * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value ofthe AWS Secrets Manager secret that allows access to the Db2 LUW endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_access_role_arn CcEndpoint#secrets_manager_access_role_arn}
    */
    readonly secretsManagerAccessRoleArn?: string;
    /**
    * The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the IBMDB2 endpoint connection details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_secret_id CcEndpoint#secrets_manager_secret_id}
    */
    readonly secretsManagerSecretId?: string;
    /**
    * Enables ongoing replication (CDC) as a BOOLEAN value. The default is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#set_data_capture_changes CcEndpoint#set_data_capture_changes}
    */
    readonly setDataCaptureChanges?: boolean | cdktn.IResolvable;
    /**
    * The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk on the DMS replication instance. The default value is 1024 (1 MB).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#write_buffer_size CcEndpoint#write_buffer_size}
    */
    readonly writeBufferSize?: number;
}
export class IbmDb2SettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IbmDb2SettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._currentLsn !== undefined) {
            hasAnyValues = true;
            internalValueResult.currentLsn = this._currentLsn;
        }
        if (this._keepCsvFiles !== undefined) {
            hasAnyValues = true;
            internalValueResult.keepCsvFiles = this._keepCsvFiles;
        }
        if (this._loadTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.loadTimeout = this._loadTimeout;
        }
        if (this._maxFileSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxFileSize = this._maxFileSize;
        }
        if (this._maxKBytesPerRead !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxKBytesPerRead = this._maxKBytesPerRead;
        }
        if (this._secretsManagerAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerAccessRoleArn = this._secretsManagerAccessRoleArn;
        }
        if (this._secretsManagerSecretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerSecretId = this._secretsManagerSecretId;
        }
        if (this._setDataCaptureChanges !== undefined) {
            hasAnyValues = true;
            internalValueResult.setDataCaptureChanges = this._setDataCaptureChanges;
        }
        if (this._writeBufferSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeBufferSize = this._writeBufferSize;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IbmDb2SettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._currentLsn = undefined;
            this._keepCsvFiles = undefined;
            this._loadTimeout = undefined;
            this._maxFileSize = undefined;
            this._maxKBytesPerRead = undefined;
            this._secretsManagerAccessRoleArn = undefined;
            this._secretsManagerSecretId = undefined;
            this._setDataCaptureChanges = undefined;
            this._writeBufferSize = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._currentLsn = value.currentLsn;
            this._keepCsvFiles = value.keepCsvFiles;
            this._loadTimeout = value.loadTimeout;
            this._maxFileSize = value.maxFileSize;
            this._maxKBytesPerRead = value.maxKBytesPerRead;
            this._secretsManagerAccessRoleArn = value.secretsManagerAccessRoleArn;
            this._secretsManagerSecretId = value.secretsManagerSecretId;
            this._setDataCaptureChanges = value.setDataCaptureChanges;
            this._writeBufferSize = value.writeBufferSize;
        }
    }

    // current_lsn - computed: true, optional: true, required: false
    private _currentLsn?: string; 
    public get currentLsn() {
        return this.getStringAttribute('current_lsn');
    }
    public set currentLsn(value: string) {
        this._currentLsn = value;
    }
    public resetCurrentLsn() {
        this._currentLsn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get currentLsnInput() {
        return this._currentLsn;
    }

    // keep_csv_files - computed: true, optional: true, required: false
    private _keepCsvFiles?: boolean | cdktn.IResolvable; 
    public get keepCsvFiles() {
        return this.getBooleanAttribute('keep_csv_files');
    }
    public set keepCsvFiles(value: boolean | cdktn.IResolvable) {
        this._keepCsvFiles = value;
    }
    public resetKeepCsvFiles() {
        this._keepCsvFiles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keepCsvFilesInput() {
        return this._keepCsvFiles;
    }

    // load_timeout - computed: true, optional: true, required: false
    private _loadTimeout?: number; 
    public get loadTimeout() {
        return this.getNumberAttribute('load_timeout');
    }
    public set loadTimeout(value: number) {
        this._loadTimeout = value;
    }
    public resetLoadTimeout() {
        this._loadTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadTimeoutInput() {
        return this._loadTimeout;
    }

    // max_file_size - computed: true, optional: true, required: false
    private _maxFileSize?: number; 
    public get maxFileSize() {
        return this.getNumberAttribute('max_file_size');
    }
    public set maxFileSize(value: number) {
        this._maxFileSize = value;
    }
    public resetMaxFileSize() {
        this._maxFileSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxFileSizeInput() {
        return this._maxFileSize;
    }

    // max_k_bytes_per_read - computed: true, optional: true, required: false
    private _maxKBytesPerRead?: number; 
    public get maxKBytesPerRead() {
        return this.getNumberAttribute('max_k_bytes_per_read');
    }
    public set maxKBytesPerRead(value: number) {
        this._maxKBytesPerRead = value;
    }
    public resetMaxKBytesPerRead() {
        this._maxKBytesPerRead = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxKBytesPerReadInput() {
        return this._maxKBytesPerRead;
    }

    // secrets_manager_access_role_arn - computed: true, optional: true, required: false
    private _secretsManagerAccessRoleArn?: string; 
    public get secretsManagerAccessRoleArn() {
        return this.getStringAttribute('secrets_manager_access_role_arn');
    }
    public set secretsManagerAccessRoleArn(value: string) {
        this._secretsManagerAccessRoleArn = value;
    }
    public resetSecretsManagerAccessRoleArn() {
        this._secretsManagerAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerAccessRoleArnInput() {
        return this._secretsManagerAccessRoleArn;
    }

    // secrets_manager_secret_id - computed: true, optional: true, required: false
    private _secretsManagerSecretId?: string; 
    public get secretsManagerSecretId() {
        return this.getStringAttribute('secrets_manager_secret_id');
    }
    public set secretsManagerSecretId(value: string) {
        this._secretsManagerSecretId = value;
    }
    public resetSecretsManagerSecretId() {
        this._secretsManagerSecretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerSecretIdInput() {
        return this._secretsManagerSecretId;
    }

    // set_data_capture_changes - computed: true, optional: true, required: false
    private _setDataCaptureChanges?: boolean | cdktn.IResolvable; 
    public get setDataCaptureChanges() {
        return this.getBooleanAttribute('set_data_capture_changes');
    }
    public set setDataCaptureChanges(value: boolean | cdktn.IResolvable) {
        this._setDataCaptureChanges = value;
    }
    public resetSetDataCaptureChanges() {
        this._setDataCaptureChanges = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get setDataCaptureChangesInput() {
        return this._setDataCaptureChanges;
    }

    // write_buffer_size - computed: true, optional: true, required: false
    private _writeBufferSize?: number; 
    public get writeBufferSize() {
        return this.getNumberAttribute('write_buffer_size');
    }
    public set writeBufferSize(value: number) {
        this._writeBufferSize = value;
    }
    public resetWriteBufferSize() {
        this._writeBufferSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeBufferSizeInput() {
        return this._writeBufferSize;
    }
}
export interface KafkaSettingsProperty {
    /**
    * A comma-separated list of one or more broker locations in your Kafka cluster that host your Kafka instance. Specify each broker location in the form broker-hostname-or-ip:port 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#broker CcEndpoint#broker}
    */
    readonly broker?: string;
    /**
    * Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output. The default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#include_control_details CcEndpoint#include_control_details}
    */
    readonly includeControlDetails?: boolean | cdktn.IResolvable;
    /**
    * Include NULL and empty columns for records migrated to the endpoint. The default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#include_null_and_empty CcEndpoint#include_null_and_empty}
    */
    readonly includeNullAndEmpty?: boolean | cdktn.IResolvable;
    /**
    * Shows the partition value within the Kafka message output unless the partition type is schema-table-type. The default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#include_partition_value CcEndpoint#include_partition_value}
    */
    readonly includePartitionValue?: boolean | cdktn.IResolvable;
    /**
    * Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column. The default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#include_table_alter_operations CcEndpoint#include_table_alter_operations}
    */
    readonly includeTableAlterOperations?: boolean | cdktn.IResolvable;
    /**
    * Provides detailed transaction information from the source database. This information includes a commit timestamp, a log position, and values for transaction_id, previous transaction_id, and transaction_record_id (the record offset within a transaction). The default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#include_transaction_details CcEndpoint#include_transaction_details}
    */
    readonly includeTransactionDetails?: boolean | cdktn.IResolvable;
    /**
    * The output format for the records created on the endpoint. The message format is JSON (default) or JSON_UNFORMATTED (a single line with no tab).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#message_format CcEndpoint#message_format}
    */
    readonly messageFormat?: string;
    /**
    * The maximum size in bytes for records created on the endpoint The default is 1,000,000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#message_max_bytes CcEndpoint#message_max_bytes}
    */
    readonly messageMaxBytes?: number;
    /**
    * Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format. For example, by default, AWS DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to a Kafka target. Use the NoHexPrefix endpoint setting to enable migration of RAW data type columns without adding the '0x' prefix.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#no_hex_prefix CcEndpoint#no_hex_prefix}
    */
    readonly noHexPrefix?: boolean | cdktn.IResolvable;
    /**
    * Prefixes schema and table names to partition values, when the partition type is primary-key-type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#partition_include_schema_table CcEndpoint#partition_include_schema_table}
    */
    readonly partitionIncludeSchemaTable?: boolean | cdktn.IResolvable;
    /**
    * The secure password that you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#sasl_password CcEndpoint#sasl_password}
    */
    readonly saslPassword?: string;
    /**
    * The secure user name you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#sasl_user_name CcEndpoint#sasl_user_name}
    */
    readonly saslUserName?: string;
    /**
    * Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS). Options include ssl-encryption, ssl-authentication, and sasl-ssl. sasl-ssl requires SaslUsername and SaslPassword.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#security_protocol CcEndpoint#security_protocol}
    */
    readonly securityProtocol?: string;
    /**
    * The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that AWS DMS uses to securely connect to your Kafka target endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#ssl_ca_certificate_arn CcEndpoint#ssl_ca_certificate_arn}
    */
    readonly sslCaCertificateArn?: string;
    /**
    * The Amazon Resource Name (ARN) of the client certificate used to securely connect to a Kafka target endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#ssl_client_certificate_arn CcEndpoint#ssl_client_certificate_arn}
    */
    readonly sslClientCertificateArn?: string;
    /**
    * The Amazon Resource Name (ARN) for the client private key used to securely connect to a Kafka target endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#ssl_client_key_arn CcEndpoint#ssl_client_key_arn}
    */
    readonly sslClientKeyArn?: string;
    /**
    * The password for the client private key used to securely connect to a Kafka target endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#ssl_client_key_password CcEndpoint#ssl_client_key_password}
    */
    readonly sslClientKeyPassword?: string;
    /**
    * The topic to which you migrate the data. If you don't specify a topic, AWS DMS specifies "kafka-default-topic" as the migration topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#topic CcEndpoint#topic}
    */
    readonly topic?: string;
}
export class KafkaSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KafkaSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._broker !== undefined) {
            hasAnyValues = true;
            internalValueResult.broker = this._broker;
        }
        if (this._includeControlDetails !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeControlDetails = this._includeControlDetails;
        }
        if (this._includeNullAndEmpty !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeNullAndEmpty = this._includeNullAndEmpty;
        }
        if (this._includePartitionValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.includePartitionValue = this._includePartitionValue;
        }
        if (this._includeTableAlterOperations !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeTableAlterOperations = this._includeTableAlterOperations;
        }
        if (this._includeTransactionDetails !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeTransactionDetails = this._includeTransactionDetails;
        }
        if (this._messageFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageFormat = this._messageFormat;
        }
        if (this._messageMaxBytes !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageMaxBytes = this._messageMaxBytes;
        }
        if (this._noHexPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.noHexPrefix = this._noHexPrefix;
        }
        if (this._partitionIncludeSchemaTable !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionIncludeSchemaTable = this._partitionIncludeSchemaTable;
        }
        if (this._saslPassword !== undefined) {
            hasAnyValues = true;
            internalValueResult.saslPassword = this._saslPassword;
        }
        if (this._saslUserName !== undefined) {
            hasAnyValues = true;
            internalValueResult.saslUserName = this._saslUserName;
        }
        if (this._securityProtocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityProtocol = this._securityProtocol;
        }
        if (this._sslCaCertificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslCaCertificateArn = this._sslCaCertificateArn;
        }
        if (this._sslClientCertificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslClientCertificateArn = this._sslClientCertificateArn;
        }
        if (this._sslClientKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslClientKeyArn = this._sslClientKeyArn;
        }
        if (this._sslClientKeyPassword !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslClientKeyPassword = this._sslClientKeyPassword;
        }
        if (this._topic !== undefined) {
            hasAnyValues = true;
            internalValueResult.topic = this._topic;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KafkaSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._broker = undefined;
            this._includeControlDetails = undefined;
            this._includeNullAndEmpty = undefined;
            this._includePartitionValue = undefined;
            this._includeTableAlterOperations = undefined;
            this._includeTransactionDetails = undefined;
            this._messageFormat = undefined;
            this._messageMaxBytes = undefined;
            this._noHexPrefix = undefined;
            this._partitionIncludeSchemaTable = undefined;
            this._saslPassword = undefined;
            this._saslUserName = undefined;
            this._securityProtocol = undefined;
            this._sslCaCertificateArn = undefined;
            this._sslClientCertificateArn = undefined;
            this._sslClientKeyArn = undefined;
            this._sslClientKeyPassword = undefined;
            this._topic = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._broker = value.broker;
            this._includeControlDetails = value.includeControlDetails;
            this._includeNullAndEmpty = value.includeNullAndEmpty;
            this._includePartitionValue = value.includePartitionValue;
            this._includeTableAlterOperations = value.includeTableAlterOperations;
            this._includeTransactionDetails = value.includeTransactionDetails;
            this._messageFormat = value.messageFormat;
            this._messageMaxBytes = value.messageMaxBytes;
            this._noHexPrefix = value.noHexPrefix;
            this._partitionIncludeSchemaTable = value.partitionIncludeSchemaTable;
            this._saslPassword = value.saslPassword;
            this._saslUserName = value.saslUserName;
            this._securityProtocol = value.securityProtocol;
            this._sslCaCertificateArn = value.sslCaCertificateArn;
            this._sslClientCertificateArn = value.sslClientCertificateArn;
            this._sslClientKeyArn = value.sslClientKeyArn;
            this._sslClientKeyPassword = value.sslClientKeyPassword;
            this._topic = value.topic;
        }
    }

    // broker - computed: true, optional: true, required: false
    private _broker?: string; 
    public get broker() {
        return this.getStringAttribute('broker');
    }
    public set broker(value: string) {
        this._broker = value;
    }
    public resetBroker() {
        this._broker = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get brokerInput() {
        return this._broker;
    }

    // include_control_details - computed: true, optional: true, required: false
    private _includeControlDetails?: boolean | cdktn.IResolvable; 
    public get includeControlDetails() {
        return this.getBooleanAttribute('include_control_details');
    }
    public set includeControlDetails(value: boolean | cdktn.IResolvable) {
        this._includeControlDetails = value;
    }
    public resetIncludeControlDetails() {
        this._includeControlDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeControlDetailsInput() {
        return this._includeControlDetails;
    }

    // include_null_and_empty - computed: true, optional: true, required: false
    private _includeNullAndEmpty?: boolean | cdktn.IResolvable; 
    public get includeNullAndEmpty() {
        return this.getBooleanAttribute('include_null_and_empty');
    }
    public set includeNullAndEmpty(value: boolean | cdktn.IResolvable) {
        this._includeNullAndEmpty = value;
    }
    public resetIncludeNullAndEmpty() {
        this._includeNullAndEmpty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeNullAndEmptyInput() {
        return this._includeNullAndEmpty;
    }

    // include_partition_value - computed: true, optional: true, required: false
    private _includePartitionValue?: boolean | cdktn.IResolvable; 
    public get includePartitionValue() {
        return this.getBooleanAttribute('include_partition_value');
    }
    public set includePartitionValue(value: boolean | cdktn.IResolvable) {
        this._includePartitionValue = value;
    }
    public resetIncludePartitionValue() {
        this._includePartitionValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includePartitionValueInput() {
        return this._includePartitionValue;
    }

    // include_table_alter_operations - computed: true, optional: true, required: false
    private _includeTableAlterOperations?: boolean | cdktn.IResolvable; 
    public get includeTableAlterOperations() {
        return this.getBooleanAttribute('include_table_alter_operations');
    }
    public set includeTableAlterOperations(value: boolean | cdktn.IResolvable) {
        this._includeTableAlterOperations = value;
    }
    public resetIncludeTableAlterOperations() {
        this._includeTableAlterOperations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeTableAlterOperationsInput() {
        return this._includeTableAlterOperations;
    }

    // include_transaction_details - computed: true, optional: true, required: false
    private _includeTransactionDetails?: boolean | cdktn.IResolvable; 
    public get includeTransactionDetails() {
        return this.getBooleanAttribute('include_transaction_details');
    }
    public set includeTransactionDetails(value: boolean | cdktn.IResolvable) {
        this._includeTransactionDetails = value;
    }
    public resetIncludeTransactionDetails() {
        this._includeTransactionDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeTransactionDetailsInput() {
        return this._includeTransactionDetails;
    }

    // message_format - computed: true, optional: true, required: false
    private _messageFormat?: string; 
    public get messageFormat() {
        return this.getStringAttribute('message_format');
    }
    public set messageFormat(value: string) {
        this._messageFormat = value;
    }
    public resetMessageFormat() {
        this._messageFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageFormatInput() {
        return this._messageFormat;
    }

    // message_max_bytes - computed: true, optional: true, required: false
    private _messageMaxBytes?: number; 
    public get messageMaxBytes() {
        return this.getNumberAttribute('message_max_bytes');
    }
    public set messageMaxBytes(value: number) {
        this._messageMaxBytes = value;
    }
    public resetMessageMaxBytes() {
        this._messageMaxBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageMaxBytesInput() {
        return this._messageMaxBytes;
    }

    // no_hex_prefix - computed: true, optional: true, required: false
    private _noHexPrefix?: boolean | cdktn.IResolvable; 
    public get noHexPrefix() {
        return this.getBooleanAttribute('no_hex_prefix');
    }
    public set noHexPrefix(value: boolean | cdktn.IResolvable) {
        this._noHexPrefix = value;
    }
    public resetNoHexPrefix() {
        this._noHexPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noHexPrefixInput() {
        return this._noHexPrefix;
    }

    // partition_include_schema_table - computed: true, optional: true, required: false
    private _partitionIncludeSchemaTable?: boolean | cdktn.IResolvable; 
    public get partitionIncludeSchemaTable() {
        return this.getBooleanAttribute('partition_include_schema_table');
    }
    public set partitionIncludeSchemaTable(value: boolean | cdktn.IResolvable) {
        this._partitionIncludeSchemaTable = value;
    }
    public resetPartitionIncludeSchemaTable() {
        this._partitionIncludeSchemaTable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionIncludeSchemaTableInput() {
        return this._partitionIncludeSchemaTable;
    }

    // sasl_password - computed: true, optional: true, required: false
    private _saslPassword?: string; 
    public get saslPassword() {
        return this.getStringAttribute('sasl_password');
    }
    public set saslPassword(value: string) {
        this._saslPassword = value;
    }
    public resetSaslPassword() {
        this._saslPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get saslPasswordInput() {
        return this._saslPassword;
    }

    // sasl_user_name - computed: true, optional: true, required: false
    private _saslUserName?: string; 
    public get saslUserName() {
        return this.getStringAttribute('sasl_user_name');
    }
    public set saslUserName(value: string) {
        this._saslUserName = value;
    }
    public resetSaslUserName() {
        this._saslUserName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get saslUserNameInput() {
        return this._saslUserName;
    }

    // security_protocol - computed: true, optional: true, required: false
    private _securityProtocol?: string; 
    public get securityProtocol() {
        return this.getStringAttribute('security_protocol');
    }
    public set securityProtocol(value: string) {
        this._securityProtocol = value;
    }
    public resetSecurityProtocol() {
        this._securityProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityProtocolInput() {
        return this._securityProtocol;
    }

    // ssl_ca_certificate_arn - computed: true, optional: true, required: false
    private _sslCaCertificateArn?: string; 
    public get sslCaCertificateArn() {
        return this.getStringAttribute('ssl_ca_certificate_arn');
    }
    public set sslCaCertificateArn(value: string) {
        this._sslCaCertificateArn = value;
    }
    public resetSslCaCertificateArn() {
        this._sslCaCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslCaCertificateArnInput() {
        return this._sslCaCertificateArn;
    }

    // ssl_client_certificate_arn - computed: true, optional: true, required: false
    private _sslClientCertificateArn?: string; 
    public get sslClientCertificateArn() {
        return this.getStringAttribute('ssl_client_certificate_arn');
    }
    public set sslClientCertificateArn(value: string) {
        this._sslClientCertificateArn = value;
    }
    public resetSslClientCertificateArn() {
        this._sslClientCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslClientCertificateArnInput() {
        return this._sslClientCertificateArn;
    }

    // ssl_client_key_arn - computed: true, optional: true, required: false
    private _sslClientKeyArn?: string; 
    public get sslClientKeyArn() {
        return this.getStringAttribute('ssl_client_key_arn');
    }
    public set sslClientKeyArn(value: string) {
        this._sslClientKeyArn = value;
    }
    public resetSslClientKeyArn() {
        this._sslClientKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslClientKeyArnInput() {
        return this._sslClientKeyArn;
    }

    // ssl_client_key_password - computed: true, optional: true, required: false
    private _sslClientKeyPassword?: string; 
    public get sslClientKeyPassword() {
        return this.getStringAttribute('ssl_client_key_password');
    }
    public set sslClientKeyPassword(value: string) {
        this._sslClientKeyPassword = value;
    }
    public resetSslClientKeyPassword() {
        this._sslClientKeyPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslClientKeyPasswordInput() {
        return this._sslClientKeyPassword;
    }

    // topic - computed: true, optional: true, required: false
    private _topic?: string; 
    public get topic() {
        return this.getStringAttribute('topic');
    }
    public set topic(value: string) {
        this._topic = value;
    }
    public resetTopic() {
        this._topic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicInput() {
        return this._topic;
    }
}
export interface KinesisSettingsProperty {
    /**
    * Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output. The default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#include_control_details CcEndpoint#include_control_details}
    */
    readonly includeControlDetails?: boolean | cdktn.IResolvable;
    /**
    * Include NULL and empty columns for records migrated to the endpoint. The default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#include_null_and_empty CcEndpoint#include_null_and_empty}
    */
    readonly includeNullAndEmpty?: boolean | cdktn.IResolvable;
    /**
    * Shows the partition value within the Kinesis message output, unless the partition type is schema-table-type. The default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#include_partition_value CcEndpoint#include_partition_value}
    */
    readonly includePartitionValue?: boolean | cdktn.IResolvable;
    /**
    * Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column. The default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#include_table_alter_operations CcEndpoint#include_table_alter_operations}
    */
    readonly includeTableAlterOperations?: boolean | cdktn.IResolvable;
    /**
    * Provides detailed transaction information from the source database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#include_transaction_details CcEndpoint#include_transaction_details}
    */
    readonly includeTransactionDetails?: boolean | cdktn.IResolvable;
    /**
    * The output format for the records created on the endpoint. The message format is JSON (default) or JSON_UNFORMATTED (a single line with no tab).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#message_format CcEndpoint#message_format}
    */
    readonly messageFormat?: string;
    /**
    * Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#no_hex_prefix CcEndpoint#no_hex_prefix}
    */
    readonly noHexPrefix?: boolean | cdktn.IResolvable;
    /**
    * Prefixes schema and table names to partition values, when the partition type is primary-key-type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#partition_include_schema_table CcEndpoint#partition_include_schema_table}
    */
    readonly partitionIncludeSchemaTable?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) for the IAM role that AWS DMS uses to write to the Kinesis data stream. The role must allow the iam:PassRole action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#service_access_role_arn CcEndpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn?: string;
    /**
    * The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#stream_arn CcEndpoint#stream_arn}
    */
    readonly streamArn?: string;
}
export class KinesisSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._includeControlDetails !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeControlDetails = this._includeControlDetails;
        }
        if (this._includeNullAndEmpty !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeNullAndEmpty = this._includeNullAndEmpty;
        }
        if (this._includePartitionValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.includePartitionValue = this._includePartitionValue;
        }
        if (this._includeTableAlterOperations !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeTableAlterOperations = this._includeTableAlterOperations;
        }
        if (this._includeTransactionDetails !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeTransactionDetails = this._includeTransactionDetails;
        }
        if (this._messageFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageFormat = this._messageFormat;
        }
        if (this._noHexPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.noHexPrefix = this._noHexPrefix;
        }
        if (this._partitionIncludeSchemaTable !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionIncludeSchemaTable = this._partitionIncludeSchemaTable;
        }
        if (this._serviceAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
        }
        if (this._streamArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamArn = this._streamArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._includeControlDetails = undefined;
            this._includeNullAndEmpty = undefined;
            this._includePartitionValue = undefined;
            this._includeTableAlterOperations = undefined;
            this._includeTransactionDetails = undefined;
            this._messageFormat = undefined;
            this._noHexPrefix = undefined;
            this._partitionIncludeSchemaTable = undefined;
            this._serviceAccessRoleArn = undefined;
            this._streamArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._includeControlDetails = value.includeControlDetails;
            this._includeNullAndEmpty = value.includeNullAndEmpty;
            this._includePartitionValue = value.includePartitionValue;
            this._includeTableAlterOperations = value.includeTableAlterOperations;
            this._includeTransactionDetails = value.includeTransactionDetails;
            this._messageFormat = value.messageFormat;
            this._noHexPrefix = value.noHexPrefix;
            this._partitionIncludeSchemaTable = value.partitionIncludeSchemaTable;
            this._serviceAccessRoleArn = value.serviceAccessRoleArn;
            this._streamArn = value.streamArn;
        }
    }

    // include_control_details - computed: true, optional: true, required: false
    private _includeControlDetails?: boolean | cdktn.IResolvable; 
    public get includeControlDetails() {
        return this.getBooleanAttribute('include_control_details');
    }
    public set includeControlDetails(value: boolean | cdktn.IResolvable) {
        this._includeControlDetails = value;
    }
    public resetIncludeControlDetails() {
        this._includeControlDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeControlDetailsInput() {
        return this._includeControlDetails;
    }

    // include_null_and_empty - computed: true, optional: true, required: false
    private _includeNullAndEmpty?: boolean | cdktn.IResolvable; 
    public get includeNullAndEmpty() {
        return this.getBooleanAttribute('include_null_and_empty');
    }
    public set includeNullAndEmpty(value: boolean | cdktn.IResolvable) {
        this._includeNullAndEmpty = value;
    }
    public resetIncludeNullAndEmpty() {
        this._includeNullAndEmpty = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeNullAndEmptyInput() {
        return this._includeNullAndEmpty;
    }

    // include_partition_value - computed: true, optional: true, required: false
    private _includePartitionValue?: boolean | cdktn.IResolvable; 
    public get includePartitionValue() {
        return this.getBooleanAttribute('include_partition_value');
    }
    public set includePartitionValue(value: boolean | cdktn.IResolvable) {
        this._includePartitionValue = value;
    }
    public resetIncludePartitionValue() {
        this._includePartitionValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includePartitionValueInput() {
        return this._includePartitionValue;
    }

    // include_table_alter_operations - computed: true, optional: true, required: false
    private _includeTableAlterOperations?: boolean | cdktn.IResolvable; 
    public get includeTableAlterOperations() {
        return this.getBooleanAttribute('include_table_alter_operations');
    }
    public set includeTableAlterOperations(value: boolean | cdktn.IResolvable) {
        this._includeTableAlterOperations = value;
    }
    public resetIncludeTableAlterOperations() {
        this._includeTableAlterOperations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeTableAlterOperationsInput() {
        return this._includeTableAlterOperations;
    }

    // include_transaction_details - computed: true, optional: true, required: false
    private _includeTransactionDetails?: boolean | cdktn.IResolvable; 
    public get includeTransactionDetails() {
        return this.getBooleanAttribute('include_transaction_details');
    }
    public set includeTransactionDetails(value: boolean | cdktn.IResolvable) {
        this._includeTransactionDetails = value;
    }
    public resetIncludeTransactionDetails() {
        this._includeTransactionDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeTransactionDetailsInput() {
        return this._includeTransactionDetails;
    }

    // message_format - computed: true, optional: true, required: false
    private _messageFormat?: string; 
    public get messageFormat() {
        return this.getStringAttribute('message_format');
    }
    public set messageFormat(value: string) {
        this._messageFormat = value;
    }
    public resetMessageFormat() {
        this._messageFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageFormatInput() {
        return this._messageFormat;
    }

    // no_hex_prefix - computed: true, optional: true, required: false
    private _noHexPrefix?: boolean | cdktn.IResolvable; 
    public get noHexPrefix() {
        return this.getBooleanAttribute('no_hex_prefix');
    }
    public set noHexPrefix(value: boolean | cdktn.IResolvable) {
        this._noHexPrefix = value;
    }
    public resetNoHexPrefix() {
        this._noHexPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noHexPrefixInput() {
        return this._noHexPrefix;
    }

    // partition_include_schema_table - computed: true, optional: true, required: false
    private _partitionIncludeSchemaTable?: boolean | cdktn.IResolvable; 
    public get partitionIncludeSchemaTable() {
        return this.getBooleanAttribute('partition_include_schema_table');
    }
    public set partitionIncludeSchemaTable(value: boolean | cdktn.IResolvable) {
        this._partitionIncludeSchemaTable = value;
    }
    public resetPartitionIncludeSchemaTable() {
        this._partitionIncludeSchemaTable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionIncludeSchemaTableInput() {
        return this._partitionIncludeSchemaTable;
    }

    // service_access_role_arn - computed: true, optional: true, required: false
    private _serviceAccessRoleArn?: string; 
    public get serviceAccessRoleArn() {
        return this.getStringAttribute('service_access_role_arn');
    }
    public set serviceAccessRoleArn(value: string) {
        this._serviceAccessRoleArn = value;
    }
    public resetServiceAccessRoleArn() {
        this._serviceAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccessRoleArnInput() {
        return this._serviceAccessRoleArn;
    }

    // stream_arn - computed: true, optional: true, required: false
    private _streamArn?: string; 
    public get streamArn() {
        return this.getStringAttribute('stream_arn');
    }
    public set streamArn(value: string) {
        this._streamArn = value;
    }
    public resetStreamArn() {
        this._streamArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamArnInput() {
        return this._streamArn;
    }
}
export interface MicrosoftSqlServerSettingsProperty {
    /**
    * The maximum size of the packets (in bytes) used to transfer data using BCP.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#bcp_packet_size CcEndpoint#bcp_packet_size}
    */
    readonly bcpPacketSize?: number;
    /**
    * Specifies a file group for the AWS DMS internal tables.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#control_tables_file_group CcEndpoint#control_tables_file_group}
    */
    readonly controlTablesFileGroup?: string;
    /**
    * Database name for the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#database_name CcEndpoint#database_name}
    */
    readonly databaseName?: string;
    /**
    * Forces LOB lookup on inline LOB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#force_lob_lookup CcEndpoint#force_lob_lookup}
    */
    readonly forceLobLookup?: boolean | cdktn.IResolvable;
    /**
    * Endpoint connection password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#password CcEndpoint#password}
    */
    readonly password?: string;
    /**
    * Endpoint TCP port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#port CcEndpoint#port}
    */
    readonly port?: number;
    /**
    * Cleans and recreates table metadata information on the replication instance when a mismatch occurs. An example is a situation where running an alter DDL statement on a table might result in different information about the table cached in the replication instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#query_single_always_on_node CcEndpoint#query_single_always_on_node}
    */
    readonly querySingleAlwaysOnNode?: boolean | cdktn.IResolvable;
    /**
    * When this attribute is set to Y, AWS DMS only reads changes from transaction log backups and doesn't read from the active transaction log file during ongoing replication. Setting this parameter to Y enables you to control active transaction log file growth during full load and ongoing replication tasks. However, it can add some source latency to ongoing replication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#read_backup_only CcEndpoint#read_backup_only}
    */
    readonly readBackupOnly?: boolean | cdktn.IResolvable;
    /**
    * Use this attribute to minimize the need to access the backup log and enable AWS DMS to prevent truncation using one of the following two methods.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#safeguard_policy CcEndpoint#safeguard_policy}
    */
    readonly safeguardPolicy?: string;
    /**
    * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_access_role_arn CcEndpoint#secrets_manager_access_role_arn}
    */
    readonly secretsManagerAccessRoleArn?: string;
    /**
    * The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MicrosoftSQLServer endpoint connection details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_secret_id CcEndpoint#secrets_manager_secret_id}
    */
    readonly secretsManagerSecretId?: string;
    /**
    * Fully qualified domain name of the endpoint. For an Amazon RDS SQL Server instance, this is the output of DescribeDBInstances, in the Endpoint.Address field.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#server_name CcEndpoint#server_name}
    */
    readonly serverName?: string;
    /**
    * Indicates the mode used to fetch CDC data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#tlog_access_mode CcEndpoint#tlog_access_mode}
    */
    readonly tlogAccessMode?: string;
    /**
    * Use the TrimSpaceInChar source endpoint setting to right-trim data on CHAR and NCHAR data types during migration. Setting TrimSpaceInChar does not left-trim data. The default value is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#trim_space_in_char CcEndpoint#trim_space_in_char}
    */
    readonly trimSpaceInChar?: boolean | cdktn.IResolvable;
    /**
    * Use this to attribute to transfer data for full-load operations using BCP. When the target table contains an identity column that does not exist in the source table, you must disable the use BCP for loading table option.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#use_bcp_full_load CcEndpoint#use_bcp_full_load}
    */
    readonly useBcpFullLoad?: boolean | cdktn.IResolvable;
    /**
    * When this attribute is set to Y, DMS processes third-party transaction log backups if they are created in native format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#use_third_party_backup_device CcEndpoint#use_third_party_backup_device}
    */
    readonly useThirdPartyBackupDevice?: boolean | cdktn.IResolvable;
    /**
    * Endpoint connection user name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#username CcEndpoint#username}
    */
    readonly username?: string;
}
export class MicrosoftSqlServerSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MicrosoftSqlServerSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bcpPacketSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.bcpPacketSize = this._bcpPacketSize;
        }
        if (this._controlTablesFileGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.controlTablesFileGroup = this._controlTablesFileGroup;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._forceLobLookup !== undefined) {
            hasAnyValues = true;
            internalValueResult.forceLobLookup = this._forceLobLookup;
        }
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._querySingleAlwaysOnNode !== undefined) {
            hasAnyValues = true;
            internalValueResult.querySingleAlwaysOnNode = this._querySingleAlwaysOnNode;
        }
        if (this._readBackupOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.readBackupOnly = this._readBackupOnly;
        }
        if (this._safeguardPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.safeguardPolicy = this._safeguardPolicy;
        }
        if (this._secretsManagerAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerAccessRoleArn = this._secretsManagerAccessRoleArn;
        }
        if (this._secretsManagerSecretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerSecretId = this._secretsManagerSecretId;
        }
        if (this._serverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverName = this._serverName;
        }
        if (this._tlogAccessMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.tlogAccessMode = this._tlogAccessMode;
        }
        if (this._trimSpaceInChar !== undefined) {
            hasAnyValues = true;
            internalValueResult.trimSpaceInChar = this._trimSpaceInChar;
        }
        if (this._useBcpFullLoad !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBcpFullLoad = this._useBcpFullLoad;
        }
        if (this._useThirdPartyBackupDevice !== undefined) {
            hasAnyValues = true;
            internalValueResult.useThirdPartyBackupDevice = this._useThirdPartyBackupDevice;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MicrosoftSqlServerSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bcpPacketSize = undefined;
            this._controlTablesFileGroup = undefined;
            this._databaseName = undefined;
            this._forceLobLookup = undefined;
            this._password = undefined;
            this._port = undefined;
            this._querySingleAlwaysOnNode = undefined;
            this._readBackupOnly = undefined;
            this._safeguardPolicy = undefined;
            this._secretsManagerAccessRoleArn = undefined;
            this._secretsManagerSecretId = undefined;
            this._serverName = undefined;
            this._tlogAccessMode = undefined;
            this._trimSpaceInChar = undefined;
            this._useBcpFullLoad = undefined;
            this._useThirdPartyBackupDevice = undefined;
            this._username = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bcpPacketSize = value.bcpPacketSize;
            this._controlTablesFileGroup = value.controlTablesFileGroup;
            this._databaseName = value.databaseName;
            this._forceLobLookup = value.forceLobLookup;
            this._password = value.password;
            this._port = value.port;
            this._querySingleAlwaysOnNode = value.querySingleAlwaysOnNode;
            this._readBackupOnly = value.readBackupOnly;
            this._safeguardPolicy = value.safeguardPolicy;
            this._secretsManagerAccessRoleArn = value.secretsManagerAccessRoleArn;
            this._secretsManagerSecretId = value.secretsManagerSecretId;
            this._serverName = value.serverName;
            this._tlogAccessMode = value.tlogAccessMode;
            this._trimSpaceInChar = value.trimSpaceInChar;
            this._useBcpFullLoad = value.useBcpFullLoad;
            this._useThirdPartyBackupDevice = value.useThirdPartyBackupDevice;
            this._username = value.username;
        }
    }

    // bcp_packet_size - computed: true, optional: true, required: false
    private _bcpPacketSize?: number; 
    public get bcpPacketSize() {
        return this.getNumberAttribute('bcp_packet_size');
    }
    public set bcpPacketSize(value: number) {
        this._bcpPacketSize = value;
    }
    public resetBcpPacketSize() {
        this._bcpPacketSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bcpPacketSizeInput() {
        return this._bcpPacketSize;
    }

    // control_tables_file_group - computed: true, optional: true, required: false
    private _controlTablesFileGroup?: string; 
    public get controlTablesFileGroup() {
        return this.getStringAttribute('control_tables_file_group');
    }
    public set controlTablesFileGroup(value: string) {
        this._controlTablesFileGroup = value;
    }
    public resetControlTablesFileGroup() {
        this._controlTablesFileGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get controlTablesFileGroupInput() {
        return this._controlTablesFileGroup;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // force_lob_lookup - computed: true, optional: true, required: false
    private _forceLobLookup?: boolean | cdktn.IResolvable; 
    public get forceLobLookup() {
        return this.getBooleanAttribute('force_lob_lookup');
    }
    public set forceLobLookup(value: boolean | cdktn.IResolvable) {
        this._forceLobLookup = value;
    }
    public resetForceLobLookup() {
        this._forceLobLookup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceLobLookupInput() {
        return this._forceLobLookup;
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // query_single_always_on_node - computed: true, optional: true, required: false
    private _querySingleAlwaysOnNode?: boolean | cdktn.IResolvable; 
    public get querySingleAlwaysOnNode() {
        return this.getBooleanAttribute('query_single_always_on_node');
    }
    public set querySingleAlwaysOnNode(value: boolean | cdktn.IResolvable) {
        this._querySingleAlwaysOnNode = value;
    }
    public resetQuerySingleAlwaysOnNode() {
        this._querySingleAlwaysOnNode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get querySingleAlwaysOnNodeInput() {
        return this._querySingleAlwaysOnNode;
    }

    // read_backup_only - computed: true, optional: true, required: false
    private _readBackupOnly?: boolean | cdktn.IResolvable; 
    public get readBackupOnly() {
        return this.getBooleanAttribute('read_backup_only');
    }
    public set readBackupOnly(value: boolean | cdktn.IResolvable) {
        this._readBackupOnly = value;
    }
    public resetReadBackupOnly() {
        this._readBackupOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readBackupOnlyInput() {
        return this._readBackupOnly;
    }

    // safeguard_policy - computed: true, optional: true, required: false
    private _safeguardPolicy?: string; 
    public get safeguardPolicy() {
        return this.getStringAttribute('safeguard_policy');
    }
    public set safeguardPolicy(value: string) {
        this._safeguardPolicy = value;
    }
    public resetSafeguardPolicy() {
        this._safeguardPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get safeguardPolicyInput() {
        return this._safeguardPolicy;
    }

    // secrets_manager_access_role_arn - computed: true, optional: true, required: false
    private _secretsManagerAccessRoleArn?: string; 
    public get secretsManagerAccessRoleArn() {
        return this.getStringAttribute('secrets_manager_access_role_arn');
    }
    public set secretsManagerAccessRoleArn(value: string) {
        this._secretsManagerAccessRoleArn = value;
    }
    public resetSecretsManagerAccessRoleArn() {
        this._secretsManagerAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerAccessRoleArnInput() {
        return this._secretsManagerAccessRoleArn;
    }

    // secrets_manager_secret_id - computed: true, optional: true, required: false
    private _secretsManagerSecretId?: string; 
    public get secretsManagerSecretId() {
        return this.getStringAttribute('secrets_manager_secret_id');
    }
    public set secretsManagerSecretId(value: string) {
        this._secretsManagerSecretId = value;
    }
    public resetSecretsManagerSecretId() {
        this._secretsManagerSecretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerSecretIdInput() {
        return this._secretsManagerSecretId;
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // tlog_access_mode - computed: true, optional: true, required: false
    private _tlogAccessMode?: string; 
    public get tlogAccessMode() {
        return this.getStringAttribute('tlog_access_mode');
    }
    public set tlogAccessMode(value: string) {
        this._tlogAccessMode = value;
    }
    public resetTlogAccessMode() {
        this._tlogAccessMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlogAccessModeInput() {
        return this._tlogAccessMode;
    }

    // trim_space_in_char - computed: true, optional: true, required: false
    private _trimSpaceInChar?: boolean | cdktn.IResolvable; 
    public get trimSpaceInChar() {
        return this.getBooleanAttribute('trim_space_in_char');
    }
    public set trimSpaceInChar(value: boolean | cdktn.IResolvable) {
        this._trimSpaceInChar = value;
    }
    public resetTrimSpaceInChar() {
        this._trimSpaceInChar = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trimSpaceInCharInput() {
        return this._trimSpaceInChar;
    }

    // use_bcp_full_load - computed: true, optional: true, required: false
    private _useBcpFullLoad?: boolean | cdktn.IResolvable; 
    public get useBcpFullLoad() {
        return this.getBooleanAttribute('use_bcp_full_load');
    }
    public set useBcpFullLoad(value: boolean | cdktn.IResolvable) {
        this._useBcpFullLoad = value;
    }
    public resetUseBcpFullLoad() {
        this._useBcpFullLoad = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useBcpFullLoadInput() {
        return this._useBcpFullLoad;
    }

    // use_third_party_backup_device - computed: true, optional: true, required: false
    private _useThirdPartyBackupDevice?: boolean | cdktn.IResolvable; 
    public get useThirdPartyBackupDevice() {
        return this.getBooleanAttribute('use_third_party_backup_device');
    }
    public set useThirdPartyBackupDevice(value: boolean | cdktn.IResolvable) {
        this._useThirdPartyBackupDevice = value;
    }
    public resetUseThirdPartyBackupDevice() {
        this._useThirdPartyBackupDevice = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useThirdPartyBackupDeviceInput() {
        return this._useThirdPartyBackupDevice;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }
}
export interface MongoDbSettingsProperty {
    /**
    * The authentication mechanism you use to access the MongoDB source endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#auth_mechanism CcEndpoint#auth_mechanism}
    */
    readonly authMechanism?: string;
    /**
    * The MongoDB database name. This setting isn't used when AuthType is set to "no".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#auth_source CcEndpoint#auth_source}
    */
    readonly authSource?: string;
    /**
    * The authentication type you use to access the MongoDB source endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#auth_type CcEndpoint#auth_type}
    */
    readonly authType?: string;
    /**
    * The database name on the MongoDB source endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#database_name CcEndpoint#database_name}
    */
    readonly databaseName?: string;
    /**
    * Indicates the number of documents to preview to determine the document organization. Use this setting when NestingLevel is set to "one".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#docs_to_investigate CcEndpoint#docs_to_investigate}
    */
    readonly docsToInvestigate?: string;
    /**
    * Specifies the document ID. Use this setting when NestingLevel is set to "none".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#extract_doc_id CcEndpoint#extract_doc_id}
    */
    readonly extractDocId?: string;
    /**
    * Specifies either document or table mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#nesting_level CcEndpoint#nesting_level}
    */
    readonly nestingLevel?: string;
    /**
    * The password for the user account you use to access the MongoDB source endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#password CcEndpoint#password}
    */
    readonly password?: string;
    /**
    * The port value for the MongoDB source endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#port CcEndpoint#port}
    */
    readonly port?: number;
    /**
    * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_access_role_arn CcEndpoint#secrets_manager_access_role_arn}
    */
    readonly secretsManagerAccessRoleArn?: string;
    /**
    * The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MongoDB endpoint connection details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_secret_id CcEndpoint#secrets_manager_secret_id}
    */
    readonly secretsManagerSecretId?: string;
    /**
    * The name of the server on the MongoDB source endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#server_name CcEndpoint#server_name}
    */
    readonly serverName?: string;
    /**
    * The user name you use to access the MongoDB source endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#username CcEndpoint#username}
    */
    readonly username?: string;
}
export class MongoDbSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MongoDbSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authMechanism !== undefined) {
            hasAnyValues = true;
            internalValueResult.authMechanism = this._authMechanism;
        }
        if (this._authSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.authSource = this._authSource;
        }
        if (this._authType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authType = this._authType;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._docsToInvestigate !== undefined) {
            hasAnyValues = true;
            internalValueResult.docsToInvestigate = this._docsToInvestigate;
        }
        if (this._extractDocId !== undefined) {
            hasAnyValues = true;
            internalValueResult.extractDocId = this._extractDocId;
        }
        if (this._nestingLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.nestingLevel = this._nestingLevel;
        }
        if (this._password !== undefined) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._secretsManagerAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerAccessRoleArn = this._secretsManagerAccessRoleArn;
        }
        if (this._secretsManagerSecretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerSecretId = this._secretsManagerSecretId;
        }
        if (this._serverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverName = this._serverName;
        }
        if (this._username !== undefined) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MongoDbSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authMechanism = undefined;
            this._authSource = undefined;
            this._authType = undefined;
            this._databaseName = undefined;
            this._docsToInvestigate = undefined;
            this._extractDocId = undefined;
            this._nestingLevel = undefined;
            this._password = undefined;
            this._port = undefined;
            this._secretsManagerAccessRoleArn = undefined;
            this._secretsManagerSecretId = undefined;
            this._serverName = undefined;
            this._username = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authMechanism = value.authMechanism;
            this._authSource = value.authSource;
            this._authType = value.authType;
            this._databaseName = value.databaseName;
            this._docsToInvestigate = value.docsToInvestigate;
            this._extractDocId = value.extractDocId;
            this._nestingLevel = value.nestingLevel;
            this._password = value.password;
            this._port = value.port;
            this._secretsManagerAccessRoleArn = value.secretsManagerAccessRoleArn;
            this._secretsManagerSecretId = value.secretsManagerSecretId;
            this._serverName = value.serverName;
            this._username = value.username;
        }
    }

    // auth_mechanism - computed: true, optional: true, required: false
    private _authMechanism?: string; 
    public get authMechanism() {
        return this.getStringAttribute('auth_mechanism');
    }
    public set authMechanism(value: string) {
        this._authMechanism = value;
    }
    public resetAuthMechanism() {
        this._authMechanism = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authMechanismInput() {
        return this._authMechanism;
    }

    // auth_source - computed: true, optional: true, required: false
    private _authSource?: string; 
    public get authSource() {
        return this.getStringAttribute('auth_source');
    }
    public set authSource(value: string) {
        this._authSource = value;
    }
    public resetAuthSource() {
        this._authSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authSourceInput() {
        return this._authSource;
    }

    // auth_type - computed: true, optional: true, required: false
    private _authType?: string; 
    public get authType() {
        return this.getStringAttribute('auth_type');
    }
    public set authType(value: string) {
        this._authType = value;
    }
    public resetAuthType() {
        this._authType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
        return this._authType;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // docs_to_investigate - computed: true, optional: true, required: false
    private _docsToInvestigate?: string; 
    public get docsToInvestigate() {
        return this.getStringAttribute('docs_to_investigate');
    }
    public set docsToInvestigate(value: string) {
        this._docsToInvestigate = value;
    }
    public resetDocsToInvestigate() {
        this._docsToInvestigate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get docsToInvestigateInput() {
        return this._docsToInvestigate;
    }

    // extract_doc_id - computed: true, optional: true, required: false
    private _extractDocId?: string; 
    public get extractDocId() {
        return this.getStringAttribute('extract_doc_id');
    }
    public set extractDocId(value: string) {
        this._extractDocId = value;
    }
    public resetExtractDocId() {
        this._extractDocId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extractDocIdInput() {
        return this._extractDocId;
    }

    // nesting_level - computed: true, optional: true, required: false
    private _nestingLevel?: string; 
    public get nestingLevel() {
        return this.getStringAttribute('nesting_level');
    }
    public set nestingLevel(value: string) {
        this._nestingLevel = value;
    }
    public resetNestingLevel() {
        this._nestingLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nestingLevelInput() {
        return this._nestingLevel;
    }

    // password - computed: true, optional: true, required: false
    private _password?: string; 
    public get password() {
        return this.getStringAttribute('password');
    }
    public set password(value: string) {
        this._password = value;
    }
    public resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
        return this._password;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // secrets_manager_access_role_arn - computed: true, optional: true, required: false
    private _secretsManagerAccessRoleArn?: string; 
    public get secretsManagerAccessRoleArn() {
        return this.getStringAttribute('secrets_manager_access_role_arn');
    }
    public set secretsManagerAccessRoleArn(value: string) {
        this._secretsManagerAccessRoleArn = value;
    }
    public resetSecretsManagerAccessRoleArn() {
        this._secretsManagerAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerAccessRoleArnInput() {
        return this._secretsManagerAccessRoleArn;
    }

    // secrets_manager_secret_id - computed: true, optional: true, required: false
    private _secretsManagerSecretId?: string; 
    public get secretsManagerSecretId() {
        return this.getStringAttribute('secrets_manager_secret_id');
    }
    public set secretsManagerSecretId(value: string) {
        this._secretsManagerSecretId = value;
    }
    public resetSecretsManagerSecretId() {
        this._secretsManagerSecretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerSecretIdInput() {
        return this._secretsManagerSecretId;
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // username - computed: true, optional: true, required: false
    private _username?: string; 
    public get username() {
        return this.getStringAttribute('username');
    }
    public set username(value: string) {
        this._username = value;
    }
    public resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
        return this._username;
    }
}
export interface MySqlSettingsProperty {
    /**
    * Specifies a script to run immediately after AWS DMS connects to the endpoint. The migration task continues running regardless if the SQL statement succeeds or fails.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#after_connect_script CcEndpoint#after_connect_script}
    */
    readonly afterConnectScript?: string;
    /**
    * Cleans and recreates table metadata information on the replication instance when a mismatch occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#clean_source_metadata_on_mismatch CcEndpoint#clean_source_metadata_on_mismatch}
    */
    readonly cleanSourceMetadataOnMismatch?: boolean | cdktn.IResolvable;
    /**
    * Specifies how often to check the binary log for new changes/events when the database is idle. The default is five seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#events_poll_interval CcEndpoint#events_poll_interval}
    */
    readonly eventsPollInterval?: number;
    /**
    * Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#max_file_size CcEndpoint#max_file_size}
    */
    readonly maxFileSize?: number;
    /**
    * Improves performance when loading data into the MySQL-compatible target database. Specifies how many threads to use to load the data into the MySQL-compatible target database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#parallel_load_threads CcEndpoint#parallel_load_threads}
    */
    readonly parallelLoadThreads?: number;
    /**
    * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_access_role_arn CcEndpoint#secrets_manager_access_role_arn}
    */
    readonly secretsManagerAccessRoleArn?: string;
    /**
    * The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_secret_id CcEndpoint#secrets_manager_secret_id}
    */
    readonly secretsManagerSecretId?: string;
    /**
    * Specifies the time zone for the source MySQL database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#server_timezone CcEndpoint#server_timezone}
    */
    readonly serverTimezone?: string;
    /**
    * Specifies where to migrate source tables on the target, either to a single database or multiple databases.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#target_db_type CcEndpoint#target_db_type}
    */
    readonly targetDbType?: string;
}
export class MySqlSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MySqlSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._afterConnectScript !== undefined) {
            hasAnyValues = true;
            internalValueResult.afterConnectScript = this._afterConnectScript;
        }
        if (this._cleanSourceMetadataOnMismatch !== undefined) {
            hasAnyValues = true;
            internalValueResult.cleanSourceMetadataOnMismatch = this._cleanSourceMetadataOnMismatch;
        }
        if (this._eventsPollInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventsPollInterval = this._eventsPollInterval;
        }
        if (this._maxFileSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxFileSize = this._maxFileSize;
        }
        if (this._parallelLoadThreads !== undefined) {
            hasAnyValues = true;
            internalValueResult.parallelLoadThreads = this._parallelLoadThreads;
        }
        if (this._secretsManagerAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerAccessRoleArn = this._secretsManagerAccessRoleArn;
        }
        if (this._secretsManagerSecretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerSecretId = this._secretsManagerSecretId;
        }
        if (this._serverTimezone !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverTimezone = this._serverTimezone;
        }
        if (this._targetDbType !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetDbType = this._targetDbType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MySqlSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._afterConnectScript = undefined;
            this._cleanSourceMetadataOnMismatch = undefined;
            this._eventsPollInterval = undefined;
            this._maxFileSize = undefined;
            this._parallelLoadThreads = undefined;
            this._secretsManagerAccessRoleArn = undefined;
            this._secretsManagerSecretId = undefined;
            this._serverTimezone = undefined;
            this._targetDbType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._afterConnectScript = value.afterConnectScript;
            this._cleanSourceMetadataOnMismatch = value.cleanSourceMetadataOnMismatch;
            this._eventsPollInterval = value.eventsPollInterval;
            this._maxFileSize = value.maxFileSize;
            this._parallelLoadThreads = value.parallelLoadThreads;
            this._secretsManagerAccessRoleArn = value.secretsManagerAccessRoleArn;
            this._secretsManagerSecretId = value.secretsManagerSecretId;
            this._serverTimezone = value.serverTimezone;
            this._targetDbType = value.targetDbType;
        }
    }

    // after_connect_script - computed: true, optional: true, required: false
    private _afterConnectScript?: string; 
    public get afterConnectScript() {
        return this.getStringAttribute('after_connect_script');
    }
    public set afterConnectScript(value: string) {
        this._afterConnectScript = value;
    }
    public resetAfterConnectScript() {
        this._afterConnectScript = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get afterConnectScriptInput() {
        return this._afterConnectScript;
    }

    // clean_source_metadata_on_mismatch - computed: true, optional: true, required: false
    private _cleanSourceMetadataOnMismatch?: boolean | cdktn.IResolvable; 
    public get cleanSourceMetadataOnMismatch() {
        return this.getBooleanAttribute('clean_source_metadata_on_mismatch');
    }
    public set cleanSourceMetadataOnMismatch(value: boolean | cdktn.IResolvable) {
        this._cleanSourceMetadataOnMismatch = value;
    }
    public resetCleanSourceMetadataOnMismatch() {
        this._cleanSourceMetadataOnMismatch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cleanSourceMetadataOnMismatchInput() {
        return this._cleanSourceMetadataOnMismatch;
    }

    // events_poll_interval - computed: true, optional: true, required: false
    private _eventsPollInterval?: number; 
    public get eventsPollInterval() {
        return this.getNumberAttribute('events_poll_interval');
    }
    public set eventsPollInterval(value: number) {
        this._eventsPollInterval = value;
    }
    public resetEventsPollInterval() {
        this._eventsPollInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventsPollIntervalInput() {
        return this._eventsPollInterval;
    }

    // max_file_size - computed: true, optional: true, required: false
    private _maxFileSize?: number; 
    public get maxFileSize() {
        return this.getNumberAttribute('max_file_size');
    }
    public set maxFileSize(value: number) {
        this._maxFileSize = value;
    }
    public resetMaxFileSize() {
        this._maxFileSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxFileSizeInput() {
        return this._maxFileSize;
    }

    // parallel_load_threads - computed: true, optional: true, required: false
    private _parallelLoadThreads?: number; 
    public get parallelLoadThreads() {
        return this.getNumberAttribute('parallel_load_threads');
    }
    public set parallelLoadThreads(value: number) {
        this._parallelLoadThreads = value;
    }
    public resetParallelLoadThreads() {
        this._parallelLoadThreads = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parallelLoadThreadsInput() {
        return this._parallelLoadThreads;
    }

    // secrets_manager_access_role_arn - computed: true, optional: true, required: false
    private _secretsManagerAccessRoleArn?: string; 
    public get secretsManagerAccessRoleArn() {
        return this.getStringAttribute('secrets_manager_access_role_arn');
    }
    public set secretsManagerAccessRoleArn(value: string) {
        this._secretsManagerAccessRoleArn = value;
    }
    public resetSecretsManagerAccessRoleArn() {
        this._secretsManagerAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerAccessRoleArnInput() {
        return this._secretsManagerAccessRoleArn;
    }

    // secrets_manager_secret_id - computed: true, optional: true, required: false
    private _secretsManagerSecretId?: string; 
    public get secretsManagerSecretId() {
        return this.getStringAttribute('secrets_manager_secret_id');
    }
    public set secretsManagerSecretId(value: string) {
        this._secretsManagerSecretId = value;
    }
    public resetSecretsManagerSecretId() {
        this._secretsManagerSecretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerSecretIdInput() {
        return this._secretsManagerSecretId;
    }

    // server_timezone - computed: true, optional: true, required: false
    private _serverTimezone?: string; 
    public get serverTimezone() {
        return this.getStringAttribute('server_timezone');
    }
    public set serverTimezone(value: string) {
        this._serverTimezone = value;
    }
    public resetServerTimezone() {
        this._serverTimezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverTimezoneInput() {
        return this._serverTimezone;
    }

    // target_db_type - computed: true, optional: true, required: false
    private _targetDbType?: string; 
    public get targetDbType() {
        return this.getStringAttribute('target_db_type');
    }
    public set targetDbType(value: string) {
        this._targetDbType = value;
    }
    public resetTargetDbType() {
        this._targetDbType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetDbTypeInput() {
        return this._targetDbType;
    }
}
export interface NeptuneSettingsProperty {
    /**
    * The number of milliseconds for AWS DMS to wait to retry a bulk-load of migrated graph data to the Neptune target database before raising an error. The default is 250.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#error_retry_duration CcEndpoint#error_retry_duration}
    */
    readonly errorRetryDuration?: number;
    /**
    * If you want IAM authorization enabled for this endpoint, set this parameter to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#iam_auth_enabled CcEndpoint#iam_auth_enabled}
    */
    readonly iamAuthEnabled?: boolean | cdktn.IResolvable;
    /**
    * The maximum size in kilobytes of migrated graph data stored in a .csv file before AWS DMS bulk-loads the data to the Neptune target database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#max_file_size CcEndpoint#max_file_size}
    */
    readonly maxFileSize?: number;
    /**
    * The number of times for AWS DMS to retry a bulk load of migrated graph data to the Neptune target database before raising an error. The default is 5.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#max_retry_count CcEndpoint#max_retry_count}
    */
    readonly maxRetryCount?: number;
    /**
    * A folder path where you want AWS DMS to store migrated graph data in the S3 bucket specified by S3BucketName
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#s3_bucket_folder CcEndpoint#s3_bucket_folder}
    */
    readonly s3BucketFolder?: string;
    /**
    * The name of the Amazon S3 bucket where AWS DMS can temporarily store migrated graph data in .csv files before bulk-loading it to the Neptune target database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#s3_bucket_name CcEndpoint#s3_bucket_name}
    */
    readonly s3BucketName?: string;
    /**
    * The Amazon Resource Name (ARN) of the service role that you created for the Neptune target endpoint. The role must allow the iam:PassRole action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#service_access_role_arn CcEndpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn?: string;
}
export class NeptuneSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NeptuneSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._errorRetryDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorRetryDuration = this._errorRetryDuration;
        }
        if (this._iamAuthEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamAuthEnabled = this._iamAuthEnabled;
        }
        if (this._maxFileSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxFileSize = this._maxFileSize;
        }
        if (this._maxRetryCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxRetryCount = this._maxRetryCount;
        }
        if (this._s3BucketFolder !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketFolder = this._s3BucketFolder;
        }
        if (this._s3BucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketName = this._s3BucketName;
        }
        if (this._serviceAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NeptuneSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._errorRetryDuration = undefined;
            this._iamAuthEnabled = undefined;
            this._maxFileSize = undefined;
            this._maxRetryCount = undefined;
            this._s3BucketFolder = undefined;
            this._s3BucketName = undefined;
            this._serviceAccessRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._errorRetryDuration = value.errorRetryDuration;
            this._iamAuthEnabled = value.iamAuthEnabled;
            this._maxFileSize = value.maxFileSize;
            this._maxRetryCount = value.maxRetryCount;
            this._s3BucketFolder = value.s3BucketFolder;
            this._s3BucketName = value.s3BucketName;
            this._serviceAccessRoleArn = value.serviceAccessRoleArn;
        }
    }

    // error_retry_duration - computed: true, optional: true, required: false
    private _errorRetryDuration?: number; 
    public get errorRetryDuration() {
        return this.getNumberAttribute('error_retry_duration');
    }
    public set errorRetryDuration(value: number) {
        this._errorRetryDuration = value;
    }
    public resetErrorRetryDuration() {
        this._errorRetryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorRetryDurationInput() {
        return this._errorRetryDuration;
    }

    // iam_auth_enabled - computed: true, optional: true, required: false
    private _iamAuthEnabled?: boolean | cdktn.IResolvable; 
    public get iamAuthEnabled() {
        return this.getBooleanAttribute('iam_auth_enabled');
    }
    public set iamAuthEnabled(value: boolean | cdktn.IResolvable) {
        this._iamAuthEnabled = value;
    }
    public resetIamAuthEnabled() {
        this._iamAuthEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamAuthEnabledInput() {
        return this._iamAuthEnabled;
    }

    // max_file_size - computed: true, optional: true, required: false
    private _maxFileSize?: number; 
    public get maxFileSize() {
        return this.getNumberAttribute('max_file_size');
    }
    public set maxFileSize(value: number) {
        this._maxFileSize = value;
    }
    public resetMaxFileSize() {
        this._maxFileSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxFileSizeInput() {
        return this._maxFileSize;
    }

    // max_retry_count - computed: true, optional: true, required: false
    private _maxRetryCount?: number; 
    public get maxRetryCount() {
        return this.getNumberAttribute('max_retry_count');
    }
    public set maxRetryCount(value: number) {
        this._maxRetryCount = value;
    }
    public resetMaxRetryCount() {
        this._maxRetryCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRetryCountInput() {
        return this._maxRetryCount;
    }

    // s3_bucket_folder - computed: true, optional: true, required: false
    private _s3BucketFolder?: string; 
    public get s3BucketFolder() {
        return this.getStringAttribute('s3_bucket_folder');
    }
    public set s3BucketFolder(value: string) {
        this._s3BucketFolder = value;
    }
    public resetS3BucketFolder() {
        this._s3BucketFolder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketFolderInput() {
        return this._s3BucketFolder;
    }

    // s3_bucket_name - computed: true, optional: true, required: false
    private _s3BucketName?: string; 
    public get s3BucketName() {
        return this.getStringAttribute('s3_bucket_name');
    }
    public set s3BucketName(value: string) {
        this._s3BucketName = value;
    }
    public resetS3BucketName() {
        this._s3BucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketNameInput() {
        return this._s3BucketName;
    }

    // service_access_role_arn - computed: true, optional: true, required: false
    private _serviceAccessRoleArn?: string; 
    public get serviceAccessRoleArn() {
        return this.getStringAttribute('service_access_role_arn');
    }
    public set serviceAccessRoleArn(value: string) {
        this._serviceAccessRoleArn = value;
    }
    public resetServiceAccessRoleArn() {
        this._serviceAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccessRoleArnInput() {
        return this._serviceAccessRoleArn;
    }
}
export interface OracleSettingsProperty {
    /**
    * Set this attribute to false in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#access_alternate_directly CcEndpoint#access_alternate_directly}
    */
    readonly accessAlternateDirectly?: boolean | cdktn.IResolvable;
    /**
    * Set this attribute to set up table-level supplemental logging for the Oracle database. This attribute enables PRIMARY KEY supplemental logging on all tables selected for a migration task.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#add_supplemental_logging CcEndpoint#add_supplemental_logging}
    */
    readonly addSupplementalLogging?: boolean | cdktn.IResolvable;
    /**
    * Set this attribute with ArchivedLogDestId in a primary/ standby setup
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#additional_archived_log_dest_id CcEndpoint#additional_archived_log_dest_id}
    */
    readonly additionalArchivedLogDestId?: number;
    /**
    * Set this attribute to true to enable replication of Oracle tables containing columns that are nested tables or defined types.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#allow_select_nested_tables CcEndpoint#allow_select_nested_tables}
    */
    readonly allowSelectNestedTables?: boolean | cdktn.IResolvable;
    /**
    * Specifies the ID of the destination for the archived redo logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#archived_log_dest_id CcEndpoint#archived_log_dest_id}
    */
    readonly archivedLogDestId?: number;
    /**
    * When this field is set to True, AWS DMS only accesses the archived redo logs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#archived_logs_only CcEndpoint#archived_logs_only}
    */
    readonly archivedLogsOnly?: boolean | cdktn.IResolvable;
    /**
    * For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#asm_password CcEndpoint#asm_password}
    */
    readonly asmPassword?: string;
    /**
    * For an Oracle source endpoint, your ASM server address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#asm_server CcEndpoint#asm_server}
    */
    readonly asmServer?: string;
    /**
    * For an Oracle source endpoint, your ASM user name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#asm_user CcEndpoint#asm_user}
    */
    readonly asmUser?: string;
    /**
    * Specifies whether the length of a character column is in bytes or in characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#char_length_semantics CcEndpoint#char_length_semantics}
    */
    readonly charLengthSemantics?: string;
    /**
    * When set to true, this attribute helps to increase the commit rate on the Oracle target database by writing directly to tables and not writing a trail to database logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#direct_path_no_log CcEndpoint#direct_path_no_log}
    */
    readonly directPathNoLog?: boolean | cdktn.IResolvable;
    /**
    * When set to true, this attribute specifies a parallel load when useDirectPathFullLoad is set to Y.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#direct_path_parallel_load CcEndpoint#direct_path_parallel_load}
    */
    readonly directPathParallelLoad?: boolean | cdktn.IResolvable;
    /**
    * Set this attribute to enable homogenous tablespace replication and create existing tables or indexes under the same tablespace on the target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#enable_homogenous_tablespace CcEndpoint#enable_homogenous_tablespace}
    */
    readonly enableHomogenousTablespace?: boolean | cdktn.IResolvable;
    /**
    * Specifies the IDs of one more destinations for one or more archived redo logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#extra_archived_log_dest_ids CcEndpoint#extra_archived_log_dest_ids}
    */
    readonly extraArchivedLogDestIds?: number[];
    /**
    * When set to true, this attribute causes a task to fail if the actual size of an LOB column is greater than the specified LobMaxSize.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation CcEndpoint#fail_tasks_on_lob_truncation}
    */
    readonly failTasksOnLobTruncation?: boolean | cdktn.IResolvable;
    /**
    * Specifies the number scale. You can select a scale up to 38, or you can select FLOAT. By default, the NUMBER data type is converted to precision 38, scale 10.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#number_datatype_scale CcEndpoint#number_datatype_scale}
    */
    readonly numberDatatypeScale?: number;
    /**
    * Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#oracle_path_prefix CcEndpoint#oracle_path_prefix}
    */
    readonly oraclePathPrefix?: string;
    /**
    * Set this attribute to change the number of threads that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#parallel_asm_read_threads CcEndpoint#parallel_asm_read_threads}
    */
    readonly parallelAsmReadThreads?: number;
    /**
    * Set this attribute to change the number of read-ahead blocks that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#read_ahead_blocks CcEndpoint#read_ahead_blocks}
    */
    readonly readAheadBlocks?: number;
    /**
    * When set to true, this attribute supports tablespace replication.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#read_table_space_name CcEndpoint#read_table_space_name}
    */
    readonly readTableSpaceName?: boolean | cdktn.IResolvable;
    /**
    * Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#replace_path_prefix CcEndpoint#replace_path_prefix}
    */
    readonly replacePathPrefix?: boolean | cdktn.IResolvable;
    /**
    * Specifies the number of seconds that the system waits before resending a query.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#retry_interval CcEndpoint#retry_interval}
    */
    readonly retryInterval?: number;
    /**
    * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_access_role_arn CcEndpoint#secrets_manager_access_role_arn}
    */
    readonly secretsManagerAccessRoleArn?: string;
    /**
    * Required only if your Oracle endpoint uses Advanced Storage Manager (ASM).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_oracle_asm_access_role_arn CcEndpoint#secrets_manager_oracle_asm_access_role_arn}
    */
    readonly secretsManagerOracleAsmAccessRoleArn?: string;
    /**
    * Required only if your Oracle endpoint uses Advanced Storage Manager (ASM).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_oracle_asm_secret_id CcEndpoint#secrets_manager_oracle_asm_secret_id}
    */
    readonly secretsManagerOracleAsmSecretId?: string;
    /**
    * The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Oracle endpoint connection details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_secret_id CcEndpoint#secrets_manager_secret_id}
    */
    readonly secretsManagerSecretId?: string;
    /**
    * For an Oracle source endpoint, the transparent data encryption (TDE) password required by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#security_db_encryption CcEndpoint#security_db_encryption}
    */
    readonly securityDbEncryption?: string;
    /**
    * For an Oracle source endpoint, the name of a key used for the transparent data encryption (TDE) of the columns and tablespaces in an Oracle source database that is encrypted using TDE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#security_db_encryption_name CcEndpoint#security_db_encryption_name}
    */
    readonly securityDbEncryptionName?: string;
    /**
    * Use this attribute to convert SDO_GEOMETRY to GEOJSON format. By default, DMS calls the SDO2GEOJSON custom function if present and accessible. Or you can create your own custom function that mimics the operation of SDOGEOJSON and set SpatialDataOptionToGeoJsonFunctionName to call it instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#spatial_data_option_to_geo_json_function_name CcEndpoint#spatial_data_option_to_geo_json_function_name}
    */
    readonly spatialDataOptionToGeoJsonFunctionName?: string;
    /**
    * Use this attribute to specify a time in minutes for the delay in standby sync.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#standby_delay_time CcEndpoint#standby_delay_time}
    */
    readonly standbyDelayTime?: number;
    /**
    * Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#use_alternate_folder_for_online CcEndpoint#use_alternate_folder_for_online}
    */
    readonly useAlternateFolderForOnline?: boolean | cdktn.IResolvable;
    /**
    * Set this attribute to True to capture change data using the Binary Reader utility.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#use_b_file CcEndpoint#use_b_file}
    */
    readonly useBFile?: boolean | cdktn.IResolvable;
    /**
    * Set this attribute to True to have AWS DMS use a direct path full load.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#use_direct_path_full_load CcEndpoint#use_direct_path_full_load}
    */
    readonly useDirectPathFullLoad?: boolean | cdktn.IResolvable;
    /**
    * Set this attribute to True to capture change data using the Oracle LogMiner utility (the default).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#use_logminer_reader CcEndpoint#use_logminer_reader}
    */
    readonly useLogminerReader?: boolean | cdktn.IResolvable;
    /**
    * Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#use_path_prefix CcEndpoint#use_path_prefix}
    */
    readonly usePathPrefix?: string;
}
export class OracleSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OracleSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessAlternateDirectly !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessAlternateDirectly = this._accessAlternateDirectly;
        }
        if (this._addSupplementalLogging !== undefined) {
            hasAnyValues = true;
            internalValueResult.addSupplementalLogging = this._addSupplementalLogging;
        }
        if (this._additionalArchivedLogDestId !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalArchivedLogDestId = this._additionalArchivedLogDestId;
        }
        if (this._allowSelectNestedTables !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowSelectNestedTables = this._allowSelectNestedTables;
        }
        if (this._archivedLogDestId !== undefined) {
            hasAnyValues = true;
            internalValueResult.archivedLogDestId = this._archivedLogDestId;
        }
        if (this._archivedLogsOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.archivedLogsOnly = this._archivedLogsOnly;
        }
        if (this._asmPassword !== undefined) {
            hasAnyValues = true;
            internalValueResult.asmPassword = this._asmPassword;
        }
        if (this._asmServer !== undefined) {
            hasAnyValues = true;
            internalValueResult.asmServer = this._asmServer;
        }
        if (this._asmUser !== undefined) {
            hasAnyValues = true;
            internalValueResult.asmUser = this._asmUser;
        }
        if (this._charLengthSemantics !== undefined) {
            hasAnyValues = true;
            internalValueResult.charLengthSemantics = this._charLengthSemantics;
        }
        if (this._directPathNoLog !== undefined) {
            hasAnyValues = true;
            internalValueResult.directPathNoLog = this._directPathNoLog;
        }
        if (this._directPathParallelLoad !== undefined) {
            hasAnyValues = true;
            internalValueResult.directPathParallelLoad = this._directPathParallelLoad;
        }
        if (this._enableHomogenousTablespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableHomogenousTablespace = this._enableHomogenousTablespace;
        }
        if (this._extraArchivedLogDestIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.extraArchivedLogDestIds = this._extraArchivedLogDestIds;
        }
        if (this._failTasksOnLobTruncation !== undefined) {
            hasAnyValues = true;
            internalValueResult.failTasksOnLobTruncation = this._failTasksOnLobTruncation;
        }
        if (this._numberDatatypeScale !== undefined) {
            hasAnyValues = true;
            internalValueResult.numberDatatypeScale = this._numberDatatypeScale;
        }
        if (this._oraclePathPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.oraclePathPrefix = this._oraclePathPrefix;
        }
        if (this._parallelAsmReadThreads !== undefined) {
            hasAnyValues = true;
            internalValueResult.parallelAsmReadThreads = this._parallelAsmReadThreads;
        }
        if (this._readAheadBlocks !== undefined) {
            hasAnyValues = true;
            internalValueResult.readAheadBlocks = this._readAheadBlocks;
        }
        if (this._readTableSpaceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.readTableSpaceName = this._readTableSpaceName;
        }
        if (this._replacePathPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.replacePathPrefix = this._replacePathPrefix;
        }
        if (this._retryInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.retryInterval = this._retryInterval;
        }
        if (this._secretsManagerAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerAccessRoleArn = this._secretsManagerAccessRoleArn;
        }
        if (this._secretsManagerOracleAsmAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerOracleAsmAccessRoleArn = this._secretsManagerOracleAsmAccessRoleArn;
        }
        if (this._secretsManagerOracleAsmSecretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerOracleAsmSecretId = this._secretsManagerOracleAsmSecretId;
        }
        if (this._secretsManagerSecretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerSecretId = this._secretsManagerSecretId;
        }
        if (this._securityDbEncryption !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityDbEncryption = this._securityDbEncryption;
        }
        if (this._securityDbEncryptionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityDbEncryptionName = this._securityDbEncryptionName;
        }
        if (this._spatialDataOptionToGeoJsonFunctionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.spatialDataOptionToGeoJsonFunctionName = this._spatialDataOptionToGeoJsonFunctionName;
        }
        if (this._standbyDelayTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.standbyDelayTime = this._standbyDelayTime;
        }
        if (this._useAlternateFolderForOnline !== undefined) {
            hasAnyValues = true;
            internalValueResult.useAlternateFolderForOnline = this._useAlternateFolderForOnline;
        }
        if (this._useBFile !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBFile = this._useBFile;
        }
        if (this._useDirectPathFullLoad !== undefined) {
            hasAnyValues = true;
            internalValueResult.useDirectPathFullLoad = this._useDirectPathFullLoad;
        }
        if (this._useLogminerReader !== undefined) {
            hasAnyValues = true;
            internalValueResult.useLogminerReader = this._useLogminerReader;
        }
        if (this._usePathPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.usePathPrefix = this._usePathPrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OracleSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessAlternateDirectly = undefined;
            this._addSupplementalLogging = undefined;
            this._additionalArchivedLogDestId = undefined;
            this._allowSelectNestedTables = undefined;
            this._archivedLogDestId = undefined;
            this._archivedLogsOnly = undefined;
            this._asmPassword = undefined;
            this._asmServer = undefined;
            this._asmUser = undefined;
            this._charLengthSemantics = undefined;
            this._directPathNoLog = undefined;
            this._directPathParallelLoad = undefined;
            this._enableHomogenousTablespace = undefined;
            this._extraArchivedLogDestIds = undefined;
            this._failTasksOnLobTruncation = undefined;
            this._numberDatatypeScale = undefined;
            this._oraclePathPrefix = undefined;
            this._parallelAsmReadThreads = undefined;
            this._readAheadBlocks = undefined;
            this._readTableSpaceName = undefined;
            this._replacePathPrefix = undefined;
            this._retryInterval = undefined;
            this._secretsManagerAccessRoleArn = undefined;
            this._secretsManagerOracleAsmAccessRoleArn = undefined;
            this._secretsManagerOracleAsmSecretId = undefined;
            this._secretsManagerSecretId = undefined;
            this._securityDbEncryption = undefined;
            this._securityDbEncryptionName = undefined;
            this._spatialDataOptionToGeoJsonFunctionName = undefined;
            this._standbyDelayTime = undefined;
            this._useAlternateFolderForOnline = undefined;
            this._useBFile = undefined;
            this._useDirectPathFullLoad = undefined;
            this._useLogminerReader = undefined;
            this._usePathPrefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessAlternateDirectly = value.accessAlternateDirectly;
            this._addSupplementalLogging = value.addSupplementalLogging;
            this._additionalArchivedLogDestId = value.additionalArchivedLogDestId;
            this._allowSelectNestedTables = value.allowSelectNestedTables;
            this._archivedLogDestId = value.archivedLogDestId;
            this._archivedLogsOnly = value.archivedLogsOnly;
            this._asmPassword = value.asmPassword;
            this._asmServer = value.asmServer;
            this._asmUser = value.asmUser;
            this._charLengthSemantics = value.charLengthSemantics;
            this._directPathNoLog = value.directPathNoLog;
            this._directPathParallelLoad = value.directPathParallelLoad;
            this._enableHomogenousTablespace = value.enableHomogenousTablespace;
            this._extraArchivedLogDestIds = value.extraArchivedLogDestIds;
            this._failTasksOnLobTruncation = value.failTasksOnLobTruncation;
            this._numberDatatypeScale = value.numberDatatypeScale;
            this._oraclePathPrefix = value.oraclePathPrefix;
            this._parallelAsmReadThreads = value.parallelAsmReadThreads;
            this._readAheadBlocks = value.readAheadBlocks;
            this._readTableSpaceName = value.readTableSpaceName;
            this._replacePathPrefix = value.replacePathPrefix;
            this._retryInterval = value.retryInterval;
            this._secretsManagerAccessRoleArn = value.secretsManagerAccessRoleArn;
            this._secretsManagerOracleAsmAccessRoleArn = value.secretsManagerOracleAsmAccessRoleArn;
            this._secretsManagerOracleAsmSecretId = value.secretsManagerOracleAsmSecretId;
            this._secretsManagerSecretId = value.secretsManagerSecretId;
            this._securityDbEncryption = value.securityDbEncryption;
            this._securityDbEncryptionName = value.securityDbEncryptionName;
            this._spatialDataOptionToGeoJsonFunctionName = value.spatialDataOptionToGeoJsonFunctionName;
            this._standbyDelayTime = value.standbyDelayTime;
            this._useAlternateFolderForOnline = value.useAlternateFolderForOnline;
            this._useBFile = value.useBFile;
            this._useDirectPathFullLoad = value.useDirectPathFullLoad;
            this._useLogminerReader = value.useLogminerReader;
            this._usePathPrefix = value.usePathPrefix;
        }
    }

    // access_alternate_directly - computed: true, optional: true, required: false
    private _accessAlternateDirectly?: boolean | cdktn.IResolvable; 
    public get accessAlternateDirectly() {
        return this.getBooleanAttribute('access_alternate_directly');
    }
    public set accessAlternateDirectly(value: boolean | cdktn.IResolvable) {
        this._accessAlternateDirectly = value;
    }
    public resetAccessAlternateDirectly() {
        this._accessAlternateDirectly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessAlternateDirectlyInput() {
        return this._accessAlternateDirectly;
    }

    // add_supplemental_logging - computed: true, optional: true, required: false
    private _addSupplementalLogging?: boolean | cdktn.IResolvable; 
    public get addSupplementalLogging() {
        return this.getBooleanAttribute('add_supplemental_logging');
    }
    public set addSupplementalLogging(value: boolean | cdktn.IResolvable) {
        this._addSupplementalLogging = value;
    }
    public resetAddSupplementalLogging() {
        this._addSupplementalLogging = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addSupplementalLoggingInput() {
        return this._addSupplementalLogging;
    }

    // additional_archived_log_dest_id - computed: true, optional: true, required: false
    private _additionalArchivedLogDestId?: number; 
    public get additionalArchivedLogDestId() {
        return this.getNumberAttribute('additional_archived_log_dest_id');
    }
    public set additionalArchivedLogDestId(value: number) {
        this._additionalArchivedLogDestId = value;
    }
    public resetAdditionalArchivedLogDestId() {
        this._additionalArchivedLogDestId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalArchivedLogDestIdInput() {
        return this._additionalArchivedLogDestId;
    }

    // allow_select_nested_tables - computed: true, optional: true, required: false
    private _allowSelectNestedTables?: boolean | cdktn.IResolvable; 
    public get allowSelectNestedTables() {
        return this.getBooleanAttribute('allow_select_nested_tables');
    }
    public set allowSelectNestedTables(value: boolean | cdktn.IResolvable) {
        this._allowSelectNestedTables = value;
    }
    public resetAllowSelectNestedTables() {
        this._allowSelectNestedTables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowSelectNestedTablesInput() {
        return this._allowSelectNestedTables;
    }

    // archived_log_dest_id - computed: true, optional: true, required: false
    private _archivedLogDestId?: number; 
    public get archivedLogDestId() {
        return this.getNumberAttribute('archived_log_dest_id');
    }
    public set archivedLogDestId(value: number) {
        this._archivedLogDestId = value;
    }
    public resetArchivedLogDestId() {
        this._archivedLogDestId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get archivedLogDestIdInput() {
        return this._archivedLogDestId;
    }

    // archived_logs_only - computed: true, optional: true, required: false
    private _archivedLogsOnly?: boolean | cdktn.IResolvable; 
    public get archivedLogsOnly() {
        return this.getBooleanAttribute('archived_logs_only');
    }
    public set archivedLogsOnly(value: boolean | cdktn.IResolvable) {
        this._archivedLogsOnly = value;
    }
    public resetArchivedLogsOnly() {
        this._archivedLogsOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get archivedLogsOnlyInput() {
        return this._archivedLogsOnly;
    }

    // asm_password - computed: true, optional: true, required: false
    private _asmPassword?: string; 
    public get asmPassword() {
        return this.getStringAttribute('asm_password');
    }
    public set asmPassword(value: string) {
        this._asmPassword = value;
    }
    public resetAsmPassword() {
        this._asmPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get asmPasswordInput() {
        return this._asmPassword;
    }

    // asm_server - computed: true, optional: true, required: false
    private _asmServer?: string; 
    public get asmServer() {
        return this.getStringAttribute('asm_server');
    }
    public set asmServer(value: string) {
        this._asmServer = value;
    }
    public resetAsmServer() {
        this._asmServer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get asmServerInput() {
        return this._asmServer;
    }

    // asm_user - computed: true, optional: true, required: false
    private _asmUser?: string; 
    public get asmUser() {
        return this.getStringAttribute('asm_user');
    }
    public set asmUser(value: string) {
        this._asmUser = value;
    }
    public resetAsmUser() {
        this._asmUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get asmUserInput() {
        return this._asmUser;
    }

    // char_length_semantics - computed: true, optional: true, required: false
    private _charLengthSemantics?: string; 
    public get charLengthSemantics() {
        return this.getStringAttribute('char_length_semantics');
    }
    public set charLengthSemantics(value: string) {
        this._charLengthSemantics = value;
    }
    public resetCharLengthSemantics() {
        this._charLengthSemantics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get charLengthSemanticsInput() {
        return this._charLengthSemantics;
    }

    // direct_path_no_log - computed: true, optional: true, required: false
    private _directPathNoLog?: boolean | cdktn.IResolvable; 
    public get directPathNoLog() {
        return this.getBooleanAttribute('direct_path_no_log');
    }
    public set directPathNoLog(value: boolean | cdktn.IResolvable) {
        this._directPathNoLog = value;
    }
    public resetDirectPathNoLog() {
        this._directPathNoLog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directPathNoLogInput() {
        return this._directPathNoLog;
    }

    // direct_path_parallel_load - computed: true, optional: true, required: false
    private _directPathParallelLoad?: boolean | cdktn.IResolvable; 
    public get directPathParallelLoad() {
        return this.getBooleanAttribute('direct_path_parallel_load');
    }
    public set directPathParallelLoad(value: boolean | cdktn.IResolvable) {
        this._directPathParallelLoad = value;
    }
    public resetDirectPathParallelLoad() {
        this._directPathParallelLoad = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get directPathParallelLoadInput() {
        return this._directPathParallelLoad;
    }

    // enable_homogenous_tablespace - computed: true, optional: true, required: false
    private _enableHomogenousTablespace?: boolean | cdktn.IResolvable; 
    public get enableHomogenousTablespace() {
        return this.getBooleanAttribute('enable_homogenous_tablespace');
    }
    public set enableHomogenousTablespace(value: boolean | cdktn.IResolvable) {
        this._enableHomogenousTablespace = value;
    }
    public resetEnableHomogenousTablespace() {
        this._enableHomogenousTablespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableHomogenousTablespaceInput() {
        return this._enableHomogenousTablespace;
    }

    // extra_archived_log_dest_ids - computed: true, optional: true, required: false
    private _extraArchivedLogDestIds?: number[]; 
    public get extraArchivedLogDestIds() {
        return this.getNumberListAttribute('extra_archived_log_dest_ids');
    }
    public set extraArchivedLogDestIds(value: number[]) {
        this._extraArchivedLogDestIds = value;
    }
    public resetExtraArchivedLogDestIds() {
        this._extraArchivedLogDestIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extraArchivedLogDestIdsInput() {
        return this._extraArchivedLogDestIds;
    }

    // fail_tasks_on_lob_truncation - computed: true, optional: true, required: false
    private _failTasksOnLobTruncation?: boolean | cdktn.IResolvable; 
    public get failTasksOnLobTruncation() {
        return this.getBooleanAttribute('fail_tasks_on_lob_truncation');
    }
    public set failTasksOnLobTruncation(value: boolean | cdktn.IResolvable) {
        this._failTasksOnLobTruncation = value;
    }
    public resetFailTasksOnLobTruncation() {
        this._failTasksOnLobTruncation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failTasksOnLobTruncationInput() {
        return this._failTasksOnLobTruncation;
    }

    // number_datatype_scale - computed: true, optional: true, required: false
    private _numberDatatypeScale?: number; 
    public get numberDatatypeScale() {
        return this.getNumberAttribute('number_datatype_scale');
    }
    public set numberDatatypeScale(value: number) {
        this._numberDatatypeScale = value;
    }
    public resetNumberDatatypeScale() {
        this._numberDatatypeScale = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberDatatypeScaleInput() {
        return this._numberDatatypeScale;
    }

    // oracle_path_prefix - computed: true, optional: true, required: false
    private _oraclePathPrefix?: string; 
    public get oraclePathPrefix() {
        return this.getStringAttribute('oracle_path_prefix');
    }
    public set oraclePathPrefix(value: string) {
        this._oraclePathPrefix = value;
    }
    public resetOraclePathPrefix() {
        this._oraclePathPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oraclePathPrefixInput() {
        return this._oraclePathPrefix;
    }

    // parallel_asm_read_threads - computed: true, optional: true, required: false
    private _parallelAsmReadThreads?: number; 
    public get parallelAsmReadThreads() {
        return this.getNumberAttribute('parallel_asm_read_threads');
    }
    public set parallelAsmReadThreads(value: number) {
        this._parallelAsmReadThreads = value;
    }
    public resetParallelAsmReadThreads() {
        this._parallelAsmReadThreads = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parallelAsmReadThreadsInput() {
        return this._parallelAsmReadThreads;
    }

    // read_ahead_blocks - computed: true, optional: true, required: false
    private _readAheadBlocks?: number; 
    public get readAheadBlocks() {
        return this.getNumberAttribute('read_ahead_blocks');
    }
    public set readAheadBlocks(value: number) {
        this._readAheadBlocks = value;
    }
    public resetReadAheadBlocks() {
        this._readAheadBlocks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readAheadBlocksInput() {
        return this._readAheadBlocks;
    }

    // read_table_space_name - computed: true, optional: true, required: false
    private _readTableSpaceName?: boolean | cdktn.IResolvable; 
    public get readTableSpaceName() {
        return this.getBooleanAttribute('read_table_space_name');
    }
    public set readTableSpaceName(value: boolean | cdktn.IResolvable) {
        this._readTableSpaceName = value;
    }
    public resetReadTableSpaceName() {
        this._readTableSpaceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readTableSpaceNameInput() {
        return this._readTableSpaceName;
    }

    // replace_path_prefix - computed: true, optional: true, required: false
    private _replacePathPrefix?: boolean | cdktn.IResolvable; 
    public get replacePathPrefix() {
        return this.getBooleanAttribute('replace_path_prefix');
    }
    public set replacePathPrefix(value: boolean | cdktn.IResolvable) {
        this._replacePathPrefix = value;
    }
    public resetReplacePathPrefix() {
        this._replacePathPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replacePathPrefixInput() {
        return this._replacePathPrefix;
    }

    // retry_interval - computed: true, optional: true, required: false
    private _retryInterval?: number; 
    public get retryInterval() {
        return this.getNumberAttribute('retry_interval');
    }
    public set retryInterval(value: number) {
        this._retryInterval = value;
    }
    public resetRetryInterval() {
        this._retryInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryIntervalInput() {
        return this._retryInterval;
    }

    // secrets_manager_access_role_arn - computed: true, optional: true, required: false
    private _secretsManagerAccessRoleArn?: string; 
    public get secretsManagerAccessRoleArn() {
        return this.getStringAttribute('secrets_manager_access_role_arn');
    }
    public set secretsManagerAccessRoleArn(value: string) {
        this._secretsManagerAccessRoleArn = value;
    }
    public resetSecretsManagerAccessRoleArn() {
        this._secretsManagerAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerAccessRoleArnInput() {
        return this._secretsManagerAccessRoleArn;
    }

    // secrets_manager_oracle_asm_access_role_arn - computed: true, optional: true, required: false
    private _secretsManagerOracleAsmAccessRoleArn?: string; 
    public get secretsManagerOracleAsmAccessRoleArn() {
        return this.getStringAttribute('secrets_manager_oracle_asm_access_role_arn');
    }
    public set secretsManagerOracleAsmAccessRoleArn(value: string) {
        this._secretsManagerOracleAsmAccessRoleArn = value;
    }
    public resetSecretsManagerOracleAsmAccessRoleArn() {
        this._secretsManagerOracleAsmAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerOracleAsmAccessRoleArnInput() {
        return this._secretsManagerOracleAsmAccessRoleArn;
    }

    // secrets_manager_oracle_asm_secret_id - computed: true, optional: true, required: false
    private _secretsManagerOracleAsmSecretId?: string; 
    public get secretsManagerOracleAsmSecretId() {
        return this.getStringAttribute('secrets_manager_oracle_asm_secret_id');
    }
    public set secretsManagerOracleAsmSecretId(value: string) {
        this._secretsManagerOracleAsmSecretId = value;
    }
    public resetSecretsManagerOracleAsmSecretId() {
        this._secretsManagerOracleAsmSecretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerOracleAsmSecretIdInput() {
        return this._secretsManagerOracleAsmSecretId;
    }

    // secrets_manager_secret_id - computed: true, optional: true, required: false
    private _secretsManagerSecretId?: string; 
    public get secretsManagerSecretId() {
        return this.getStringAttribute('secrets_manager_secret_id');
    }
    public set secretsManagerSecretId(value: string) {
        this._secretsManagerSecretId = value;
    }
    public resetSecretsManagerSecretId() {
        this._secretsManagerSecretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerSecretIdInput() {
        return this._secretsManagerSecretId;
    }

    // security_db_encryption - computed: true, optional: true, required: false
    private _securityDbEncryption?: string; 
    public get securityDbEncryption() {
        return this.getStringAttribute('security_db_encryption');
    }
    public set securityDbEncryption(value: string) {
        this._securityDbEncryption = value;
    }
    public resetSecurityDbEncryption() {
        this._securityDbEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityDbEncryptionInput() {
        return this._securityDbEncryption;
    }

    // security_db_encryption_name - computed: true, optional: true, required: false
    private _securityDbEncryptionName?: string; 
    public get securityDbEncryptionName() {
        return this.getStringAttribute('security_db_encryption_name');
    }
    public set securityDbEncryptionName(value: string) {
        this._securityDbEncryptionName = value;
    }
    public resetSecurityDbEncryptionName() {
        this._securityDbEncryptionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityDbEncryptionNameInput() {
        return this._securityDbEncryptionName;
    }

    // spatial_data_option_to_geo_json_function_name - computed: true, optional: true, required: false
    private _spatialDataOptionToGeoJsonFunctionName?: string; 
    public get spatialDataOptionToGeoJsonFunctionName() {
        return this.getStringAttribute('spatial_data_option_to_geo_json_function_name');
    }
    public set spatialDataOptionToGeoJsonFunctionName(value: string) {
        this._spatialDataOptionToGeoJsonFunctionName = value;
    }
    public resetSpatialDataOptionToGeoJsonFunctionName() {
        this._spatialDataOptionToGeoJsonFunctionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spatialDataOptionToGeoJsonFunctionNameInput() {
        return this._spatialDataOptionToGeoJsonFunctionName;
    }

    // standby_delay_time - computed: true, optional: true, required: false
    private _standbyDelayTime?: number; 
    public get standbyDelayTime() {
        return this.getNumberAttribute('standby_delay_time');
    }
    public set standbyDelayTime(value: number) {
        this._standbyDelayTime = value;
    }
    public resetStandbyDelayTime() {
        this._standbyDelayTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get standbyDelayTimeInput() {
        return this._standbyDelayTime;
    }

    // use_alternate_folder_for_online - computed: true, optional: true, required: false
    private _useAlternateFolderForOnline?: boolean | cdktn.IResolvable; 
    public get useAlternateFolderForOnline() {
        return this.getBooleanAttribute('use_alternate_folder_for_online');
    }
    public set useAlternateFolderForOnline(value: boolean | cdktn.IResolvable) {
        this._useAlternateFolderForOnline = value;
    }
    public resetUseAlternateFolderForOnline() {
        this._useAlternateFolderForOnline = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useAlternateFolderForOnlineInput() {
        return this._useAlternateFolderForOnline;
    }

    // use_b_file - computed: true, optional: true, required: false
    private _useBFile?: boolean | cdktn.IResolvable; 
    public get useBFile() {
        return this.getBooleanAttribute('use_b_file');
    }
    public set useBFile(value: boolean | cdktn.IResolvable) {
        this._useBFile = value;
    }
    public resetUseBFile() {
        this._useBFile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useBFileInput() {
        return this._useBFile;
    }

    // use_direct_path_full_load - computed: true, optional: true, required: false
    private _useDirectPathFullLoad?: boolean | cdktn.IResolvable; 
    public get useDirectPathFullLoad() {
        return this.getBooleanAttribute('use_direct_path_full_load');
    }
    public set useDirectPathFullLoad(value: boolean | cdktn.IResolvable) {
        this._useDirectPathFullLoad = value;
    }
    public resetUseDirectPathFullLoad() {
        this._useDirectPathFullLoad = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useDirectPathFullLoadInput() {
        return this._useDirectPathFullLoad;
    }

    // use_logminer_reader - computed: true, optional: true, required: false
    private _useLogminerReader?: boolean | cdktn.IResolvable; 
    public get useLogminerReader() {
        return this.getBooleanAttribute('use_logminer_reader');
    }
    public set useLogminerReader(value: boolean | cdktn.IResolvable) {
        this._useLogminerReader = value;
    }
    public resetUseLogminerReader() {
        this._useLogminerReader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useLogminerReaderInput() {
        return this._useLogminerReader;
    }

    // use_path_prefix - computed: true, optional: true, required: false
    private _usePathPrefix?: string; 
    public get usePathPrefix() {
        return this.getStringAttribute('use_path_prefix');
    }
    public set usePathPrefix(value: string) {
        this._usePathPrefix = value;
    }
    public resetUsePathPrefix() {
        this._usePathPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usePathPrefixInput() {
        return this._usePathPrefix;
    }
}
export interface PostgreSqlSettingsProperty {
    /**
    * For use with change data capture (CDC) only, this attribute has AWS DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#after_connect_script CcEndpoint#after_connect_script}
    */
    readonly afterConnectScript?: string;
    /**
    * The Babelfish for Aurora PostgreSQL database name for the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#babelfish_database_name CcEndpoint#babelfish_database_name}
    */
    readonly babelfishDatabaseName?: string;
    /**
    * To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts. You can later remove these artifacts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#capture_ddls CcEndpoint#capture_ddls}
    */
    readonly captureDdls?: boolean | cdktn.IResolvable;
    /**
    * Specifies the default behavior of the replication's handling of PostgreSQL- compatible endpoints that require some additional configuration, such as Babelfish endpoints.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#database_mode CcEndpoint#database_mode}
    */
    readonly databaseMode?: string;
    /**
    * The schema in which the operational DDL database artifacts are created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#ddl_artifacts_schema CcEndpoint#ddl_artifacts_schema}
    */
    readonly ddlArtifactsSchema?: string;
    /**
    * Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#execute_timeout CcEndpoint#execute_timeout}
    */
    readonly executeTimeout?: number;
    /**
    * When set to true, this value causes a task to fail if the actual size of a LOB column is greater than the specified LobMaxSize.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation CcEndpoint#fail_tasks_on_lob_truncation}
    */
    readonly failTasksOnLobTruncation?: boolean | cdktn.IResolvable;
    /**
    * The write-ahead log (WAL) heartbeat feature mimics a dummy transaction.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#heartbeat_enable CcEndpoint#heartbeat_enable}
    */
    readonly heartbeatEnable?: boolean | cdktn.IResolvable;
    /**
    * Sets the WAL heartbeat frequency (in minutes).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#heartbeat_frequency CcEndpoint#heartbeat_frequency}
    */
    readonly heartbeatFrequency?: number;
    /**
    * Sets the schema in which the heartbeat artifacts are created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#heartbeat_schema CcEndpoint#heartbeat_schema}
    */
    readonly heartbeatSchema?: string;
    /**
    * When true, lets PostgreSQL migrate the boolean type as boolean.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#map_boolean_as_boolean CcEndpoint#map_boolean_as_boolean}
    */
    readonly mapBooleanAsBoolean?: boolean | cdktn.IResolvable;
    /**
    * Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#max_file_size CcEndpoint#max_file_size}
    */
    readonly maxFileSize?: number;
    /**
    * Specifies the plugin to use to create a replication slot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#plugin_name CcEndpoint#plugin_name}
    */
    readonly pluginName?: string;
    /**
    * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_access_role_arn CcEndpoint#secrets_manager_access_role_arn}
    */
    readonly secretsManagerAccessRoleArn?: string;
    /**
    * The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the PostgreSQL endpoint connection details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_secret_id CcEndpoint#secrets_manager_secret_id}
    */
    readonly secretsManagerSecretId?: string;
    /**
    * Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#slot_name CcEndpoint#slot_name}
    */
    readonly slotName?: string;
}
export class PostgreSqlSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PostgreSqlSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._afterConnectScript !== undefined) {
            hasAnyValues = true;
            internalValueResult.afterConnectScript = this._afterConnectScript;
        }
        if (this._babelfishDatabaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.babelfishDatabaseName = this._babelfishDatabaseName;
        }
        if (this._captureDdls !== undefined) {
            hasAnyValues = true;
            internalValueResult.captureDdls = this._captureDdls;
        }
        if (this._databaseMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseMode = this._databaseMode;
        }
        if (this._ddlArtifactsSchema !== undefined) {
            hasAnyValues = true;
            internalValueResult.ddlArtifactsSchema = this._ddlArtifactsSchema;
        }
        if (this._executeTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.executeTimeout = this._executeTimeout;
        }
        if (this._failTasksOnLobTruncation !== undefined) {
            hasAnyValues = true;
            internalValueResult.failTasksOnLobTruncation = this._failTasksOnLobTruncation;
        }
        if (this._heartbeatEnable !== undefined) {
            hasAnyValues = true;
            internalValueResult.heartbeatEnable = this._heartbeatEnable;
        }
        if (this._heartbeatFrequency !== undefined) {
            hasAnyValues = true;
            internalValueResult.heartbeatFrequency = this._heartbeatFrequency;
        }
        if (this._heartbeatSchema !== undefined) {
            hasAnyValues = true;
            internalValueResult.heartbeatSchema = this._heartbeatSchema;
        }
        if (this._mapBooleanAsBoolean !== undefined) {
            hasAnyValues = true;
            internalValueResult.mapBooleanAsBoolean = this._mapBooleanAsBoolean;
        }
        if (this._maxFileSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxFileSize = this._maxFileSize;
        }
        if (this._pluginName !== undefined) {
            hasAnyValues = true;
            internalValueResult.pluginName = this._pluginName;
        }
        if (this._secretsManagerAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerAccessRoleArn = this._secretsManagerAccessRoleArn;
        }
        if (this._secretsManagerSecretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerSecretId = this._secretsManagerSecretId;
        }
        if (this._slotName !== undefined) {
            hasAnyValues = true;
            internalValueResult.slotName = this._slotName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PostgreSqlSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._afterConnectScript = undefined;
            this._babelfishDatabaseName = undefined;
            this._captureDdls = undefined;
            this._databaseMode = undefined;
            this._ddlArtifactsSchema = undefined;
            this._executeTimeout = undefined;
            this._failTasksOnLobTruncation = undefined;
            this._heartbeatEnable = undefined;
            this._heartbeatFrequency = undefined;
            this._heartbeatSchema = undefined;
            this._mapBooleanAsBoolean = undefined;
            this._maxFileSize = undefined;
            this._pluginName = undefined;
            this._secretsManagerAccessRoleArn = undefined;
            this._secretsManagerSecretId = undefined;
            this._slotName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._afterConnectScript = value.afterConnectScript;
            this._babelfishDatabaseName = value.babelfishDatabaseName;
            this._captureDdls = value.captureDdls;
            this._databaseMode = value.databaseMode;
            this._ddlArtifactsSchema = value.ddlArtifactsSchema;
            this._executeTimeout = value.executeTimeout;
            this._failTasksOnLobTruncation = value.failTasksOnLobTruncation;
            this._heartbeatEnable = value.heartbeatEnable;
            this._heartbeatFrequency = value.heartbeatFrequency;
            this._heartbeatSchema = value.heartbeatSchema;
            this._mapBooleanAsBoolean = value.mapBooleanAsBoolean;
            this._maxFileSize = value.maxFileSize;
            this._pluginName = value.pluginName;
            this._secretsManagerAccessRoleArn = value.secretsManagerAccessRoleArn;
            this._secretsManagerSecretId = value.secretsManagerSecretId;
            this._slotName = value.slotName;
        }
    }

    // after_connect_script - computed: true, optional: true, required: false
    private _afterConnectScript?: string; 
    public get afterConnectScript() {
        return this.getStringAttribute('after_connect_script');
    }
    public set afterConnectScript(value: string) {
        this._afterConnectScript = value;
    }
    public resetAfterConnectScript() {
        this._afterConnectScript = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get afterConnectScriptInput() {
        return this._afterConnectScript;
    }

    // babelfish_database_name - computed: true, optional: true, required: false
    private _babelfishDatabaseName?: string; 
    public get babelfishDatabaseName() {
        return this.getStringAttribute('babelfish_database_name');
    }
    public set babelfishDatabaseName(value: string) {
        this._babelfishDatabaseName = value;
    }
    public resetBabelfishDatabaseName() {
        this._babelfishDatabaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get babelfishDatabaseNameInput() {
        return this._babelfishDatabaseName;
    }

    // capture_ddls - computed: true, optional: true, required: false
    private _captureDdls?: boolean | cdktn.IResolvable; 
    public get captureDdls() {
        return this.getBooleanAttribute('capture_ddls');
    }
    public set captureDdls(value: boolean | cdktn.IResolvable) {
        this._captureDdls = value;
    }
    public resetCaptureDdls() {
        this._captureDdls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get captureDdlsInput() {
        return this._captureDdls;
    }

    // database_mode - computed: true, optional: true, required: false
    private _databaseMode?: string; 
    public get databaseMode() {
        return this.getStringAttribute('database_mode');
    }
    public set databaseMode(value: string) {
        this._databaseMode = value;
    }
    public resetDatabaseMode() {
        this._databaseMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseModeInput() {
        return this._databaseMode;
    }

    // ddl_artifacts_schema - computed: true, optional: true, required: false
    private _ddlArtifactsSchema?: string; 
    public get ddlArtifactsSchema() {
        return this.getStringAttribute('ddl_artifacts_schema');
    }
    public set ddlArtifactsSchema(value: string) {
        this._ddlArtifactsSchema = value;
    }
    public resetDdlArtifactsSchema() {
        this._ddlArtifactsSchema = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ddlArtifactsSchemaInput() {
        return this._ddlArtifactsSchema;
    }

    // execute_timeout - computed: true, optional: true, required: false
    private _executeTimeout?: number; 
    public get executeTimeout() {
        return this.getNumberAttribute('execute_timeout');
    }
    public set executeTimeout(value: number) {
        this._executeTimeout = value;
    }
    public resetExecuteTimeout() {
        this._executeTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executeTimeoutInput() {
        return this._executeTimeout;
    }

    // fail_tasks_on_lob_truncation - computed: true, optional: true, required: false
    private _failTasksOnLobTruncation?: boolean | cdktn.IResolvable; 
    public get failTasksOnLobTruncation() {
        return this.getBooleanAttribute('fail_tasks_on_lob_truncation');
    }
    public set failTasksOnLobTruncation(value: boolean | cdktn.IResolvable) {
        this._failTasksOnLobTruncation = value;
    }
    public resetFailTasksOnLobTruncation() {
        this._failTasksOnLobTruncation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failTasksOnLobTruncationInput() {
        return this._failTasksOnLobTruncation;
    }

    // heartbeat_enable - computed: true, optional: true, required: false
    private _heartbeatEnable?: boolean | cdktn.IResolvable; 
    public get heartbeatEnable() {
        return this.getBooleanAttribute('heartbeat_enable');
    }
    public set heartbeatEnable(value: boolean | cdktn.IResolvable) {
        this._heartbeatEnable = value;
    }
    public resetHeartbeatEnable() {
        this._heartbeatEnable = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get heartbeatEnableInput() {
        return this._heartbeatEnable;
    }

    // heartbeat_frequency - computed: true, optional: true, required: false
    private _heartbeatFrequency?: number; 
    public get heartbeatFrequency() {
        return this.getNumberAttribute('heartbeat_frequency');
    }
    public set heartbeatFrequency(value: number) {
        this._heartbeatFrequency = value;
    }
    public resetHeartbeatFrequency() {
        this._heartbeatFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get heartbeatFrequencyInput() {
        return this._heartbeatFrequency;
    }

    // heartbeat_schema - computed: true, optional: true, required: false
    private _heartbeatSchema?: string; 
    public get heartbeatSchema() {
        return this.getStringAttribute('heartbeat_schema');
    }
    public set heartbeatSchema(value: string) {
        this._heartbeatSchema = value;
    }
    public resetHeartbeatSchema() {
        this._heartbeatSchema = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get heartbeatSchemaInput() {
        return this._heartbeatSchema;
    }

    // map_boolean_as_boolean - computed: true, optional: true, required: false
    private _mapBooleanAsBoolean?: boolean | cdktn.IResolvable; 
    public get mapBooleanAsBoolean() {
        return this.getBooleanAttribute('map_boolean_as_boolean');
    }
    public set mapBooleanAsBoolean(value: boolean | cdktn.IResolvable) {
        this._mapBooleanAsBoolean = value;
    }
    public resetMapBooleanAsBoolean() {
        this._mapBooleanAsBoolean = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mapBooleanAsBooleanInput() {
        return this._mapBooleanAsBoolean;
    }

    // max_file_size - computed: true, optional: true, required: false
    private _maxFileSize?: number; 
    public get maxFileSize() {
        return this.getNumberAttribute('max_file_size');
    }
    public set maxFileSize(value: number) {
        this._maxFileSize = value;
    }
    public resetMaxFileSize() {
        this._maxFileSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxFileSizeInput() {
        return this._maxFileSize;
    }

    // plugin_name - computed: true, optional: true, required: false
    private _pluginName?: string; 
    public get pluginName() {
        return this.getStringAttribute('plugin_name');
    }
    public set pluginName(value: string) {
        this._pluginName = value;
    }
    public resetPluginName() {
        this._pluginName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pluginNameInput() {
        return this._pluginName;
    }

    // secrets_manager_access_role_arn - computed: true, optional: true, required: false
    private _secretsManagerAccessRoleArn?: string; 
    public get secretsManagerAccessRoleArn() {
        return this.getStringAttribute('secrets_manager_access_role_arn');
    }
    public set secretsManagerAccessRoleArn(value: string) {
        this._secretsManagerAccessRoleArn = value;
    }
    public resetSecretsManagerAccessRoleArn() {
        this._secretsManagerAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerAccessRoleArnInput() {
        return this._secretsManagerAccessRoleArn;
    }

    // secrets_manager_secret_id - computed: true, optional: true, required: false
    private _secretsManagerSecretId?: string; 
    public get secretsManagerSecretId() {
        return this.getStringAttribute('secrets_manager_secret_id');
    }
    public set secretsManagerSecretId(value: string) {
        this._secretsManagerSecretId = value;
    }
    public resetSecretsManagerSecretId() {
        this._secretsManagerSecretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerSecretIdInput() {
        return this._secretsManagerSecretId;
    }

    // slot_name - computed: true, optional: true, required: false
    private _slotName?: string; 
    public get slotName() {
        return this.getStringAttribute('slot_name');
    }
    public set slotName(value: string) {
        this._slotName = value;
    }
    public resetSlotName() {
        this._slotName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slotNameInput() {
        return this._slotName;
    }
}
export interface RedisSettingsProperty {
    /**
    * The password provided with the auth-role and auth-token options of the AuthType setting for a Redis target endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#auth_password CcEndpoint#auth_password}
    */
    readonly authPassword?: string;
    /**
    * The type of authentication to perform when connecting to a Redis target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#auth_type CcEndpoint#auth_type}
    */
    readonly authType?: string;
    /**
    * The user name provided with the auth-role option of the AuthType setting for a Redis target endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#auth_user_name CcEndpoint#auth_user_name}
    */
    readonly authUserName?: string;
    /**
    * Transmission Control Protocol (TCP) port for the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#port CcEndpoint#port}
    */
    readonly port?: number;
    /**
    * Fully qualified domain name of the endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#server_name CcEndpoint#server_name}
    */
    readonly serverName?: string;
    /**
    * The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#ssl_ca_certificate_arn CcEndpoint#ssl_ca_certificate_arn}
    */
    readonly sslCaCertificateArn?: string;
    /**
    * The connection to a Redis target endpoint using Transport Layer Security (TLS). Valid values include plaintext and ssl-encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#ssl_security_protocol CcEndpoint#ssl_security_protocol}
    */
    readonly sslSecurityProtocol?: string;
}
export class RedisSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedisSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authPassword !== undefined) {
            hasAnyValues = true;
            internalValueResult.authPassword = this._authPassword;
        }
        if (this._authType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authType = this._authType;
        }
        if (this._authUserName !== undefined) {
            hasAnyValues = true;
            internalValueResult.authUserName = this._authUserName;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._serverName !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverName = this._serverName;
        }
        if (this._sslCaCertificateArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslCaCertificateArn = this._sslCaCertificateArn;
        }
        if (this._sslSecurityProtocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.sslSecurityProtocol = this._sslSecurityProtocol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedisSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authPassword = undefined;
            this._authType = undefined;
            this._authUserName = undefined;
            this._port = undefined;
            this._serverName = undefined;
            this._sslCaCertificateArn = undefined;
            this._sslSecurityProtocol = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authPassword = value.authPassword;
            this._authType = value.authType;
            this._authUserName = value.authUserName;
            this._port = value.port;
            this._serverName = value.serverName;
            this._sslCaCertificateArn = value.sslCaCertificateArn;
            this._sslSecurityProtocol = value.sslSecurityProtocol;
        }
    }

    // auth_password - computed: true, optional: true, required: false
    private _authPassword?: string; 
    public get authPassword() {
        return this.getStringAttribute('auth_password');
    }
    public set authPassword(value: string) {
        this._authPassword = value;
    }
    public resetAuthPassword() {
        this._authPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authPasswordInput() {
        return this._authPassword;
    }

    // auth_type - computed: true, optional: true, required: false
    private _authType?: string; 
    public get authType() {
        return this.getStringAttribute('auth_type');
    }
    public set authType(value: string) {
        this._authType = value;
    }
    public resetAuthType() {
        this._authType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
        return this._authType;
    }

    // auth_user_name - computed: true, optional: true, required: false
    private _authUserName?: string; 
    public get authUserName() {
        return this.getStringAttribute('auth_user_name');
    }
    public set authUserName(value: string) {
        this._authUserName = value;
    }
    public resetAuthUserName() {
        this._authUserName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authUserNameInput() {
        return this._authUserName;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // server_name - computed: true, optional: true, required: false
    private _serverName?: string; 
    public get serverName() {
        return this.getStringAttribute('server_name');
    }
    public set serverName(value: string) {
        this._serverName = value;
    }
    public resetServerName() {
        this._serverName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverNameInput() {
        return this._serverName;
    }

    // ssl_ca_certificate_arn - computed: true, optional: true, required: false
    private _sslCaCertificateArn?: string; 
    public get sslCaCertificateArn() {
        return this.getStringAttribute('ssl_ca_certificate_arn');
    }
    public set sslCaCertificateArn(value: string) {
        this._sslCaCertificateArn = value;
    }
    public resetSslCaCertificateArn() {
        this._sslCaCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslCaCertificateArnInput() {
        return this._sslCaCertificateArn;
    }

    // ssl_security_protocol - computed: true, optional: true, required: false
    private _sslSecurityProtocol?: string; 
    public get sslSecurityProtocol() {
        return this.getStringAttribute('ssl_security_protocol');
    }
    public set sslSecurityProtocol(value: string) {
        this._sslSecurityProtocol = value;
    }
    public resetSslSecurityProtocol() {
        this._sslSecurityProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sslSecurityProtocolInput() {
        return this._sslSecurityProtocol;
    }
}
export interface RedshiftSettingsProperty {
    /**
    * A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error. You can choose true or false (the default).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#accept_any_date CcEndpoint#accept_any_date}
    */
    readonly acceptAnyDate?: boolean | cdktn.IResolvable;
    /**
    * Code to run after connecting. This parameter should contain the code itself, not the name of a file containing the code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#after_connect_script CcEndpoint#after_connect_script}
    */
    readonly afterConnectScript?: string;
    /**
    * An S3 folder where the comma-separated-value (.csv) files are stored before being uploaded to the target Redshift cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#bucket_folder CcEndpoint#bucket_folder}
    */
    readonly bucketFolder?: string;
    /**
    * The name of the intermediate S3 bucket used to store .csv files before uploading data to Redshift.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#bucket_name CcEndpoint#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * If Amazon Redshift is configured to support case sensitive schema names, set CaseSensitiveNames to true. The default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#case_sensitive_names CcEndpoint#case_sensitive_names}
    */
    readonly caseSensitiveNames?: boolean | cdktn.IResolvable;
    /**
    * If you set CompUpdate to true Amazon Redshift applies automatic compression if the table is empty.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#comp_update CcEndpoint#comp_update}
    */
    readonly compUpdate?: boolean | cdktn.IResolvable;
    /**
    * A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#connection_timeout CcEndpoint#connection_timeout}
    */
    readonly connectionTimeout?: number;
    /**
    * The date format that you are using.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#date_format CcEndpoint#date_format}
    */
    readonly dateFormat?: string;
    /**
    * A value that specifies whether AWS DMS should migrate empty CHAR and VARCHAR fields as NULL. A value of true sets empty CHAR and VARCHAR fields to null. The default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#empty_as_null CcEndpoint#empty_as_null}
    */
    readonly emptyAsNull?: boolean | cdktn.IResolvable;
    /**
    * The type of server-side encryption that you want to use for your data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#encryption_mode CcEndpoint#encryption_mode}
    */
    readonly encryptionMode?: string;
    /**
    * This setting is only valid for a full-load migration task. Set ExplicitIds to true to have tables with IDENTITY columns override their auto-generated values with explicit values loaded from the source data files used to populate the tables. The default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#explicit_ids CcEndpoint#explicit_ids}
    */
    readonly explicitIds?: boolean | cdktn.IResolvable;
    /**
    * The number of threads used to upload a single file. This parameter accepts a value from 1 through 64. It defaults to 10.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#file_transfer_upload_streams CcEndpoint#file_transfer_upload_streams}
    */
    readonly fileTransferUploadStreams?: number;
    /**
    * The amount of time to wait (in milliseconds) before timing out of operations performed by AWS DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#load_timeout CcEndpoint#load_timeout}
    */
    readonly loadTimeout?: number;
    /**
    * When true, lets Redshift migrate the boolean type as boolean. By default, Redshift migrates booleans as varchar(1). You must set this setting on both the source and target endpoints for it to take effect.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#map_boolean_as_boolean CcEndpoint#map_boolean_as_boolean}
    */
    readonly mapBooleanAsBoolean?: boolean | cdktn.IResolvable;
    /**
    * The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer data to Amazon Redshift. It defaults to 1048576KB (1 GB).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#max_file_size CcEndpoint#max_file_size}
    */
    readonly maxFileSize?: number;
    /**
    * A value that specifies to remove surrounding quotation marks from strings in the incoming data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#remove_quotes CcEndpoint#remove_quotes}
    */
    readonly removeQuotes?: boolean | cdktn.IResolvable;
    /**
    * A value that specifies to replaces the invalid characters specified in ReplaceInvalidChars, substituting the specified characters instead. The default is "?".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#replace_chars CcEndpoint#replace_chars}
    */
    readonly replaceChars?: string;
    /**
    * A list of characters that you want to replace. Use with ReplaceChars.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#replace_invalid_chars CcEndpoint#replace_invalid_chars}
    */
    readonly replaceInvalidChars?: string;
    /**
    * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_access_role_arn CcEndpoint#secrets_manager_access_role_arn}
    */
    readonly secretsManagerAccessRoleArn?: string;
    /**
    * The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Amazon Redshift endpoint connection details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_secret_id CcEndpoint#secrets_manager_secret_id}
    */
    readonly secretsManagerSecretId?: string;
    /**
    * The AWS KMS key ID. If you are using SSE_KMS for the EncryptionMode, provide this key ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#server_side_encryption_kms_key_id CcEndpoint#server_side_encryption_kms_key_id}
    */
    readonly serverSideEncryptionKmsKeyId?: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service. The role must allow the iam:PassRole action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#service_access_role_arn CcEndpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn?: string;
    /**
    * The time format that you want to use. Valid values are auto (case-sensitive), 'timeformat_string', 'epochsecs', or 'epochmillisecs'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#time_format CcEndpoint#time_format}
    */
    readonly timeFormat?: string;
    /**
    * A value that specifies to remove the trailing white space characters from a VARCHAR string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#trim_blanks CcEndpoint#trim_blanks}
    */
    readonly trimBlanks?: boolean | cdktn.IResolvable;
    /**
    * A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#truncate_columns CcEndpoint#truncate_columns}
    */
    readonly truncateColumns?: boolean | cdktn.IResolvable;
    /**
    * The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk at the DMS replication instance. The default value is 1000 (buffer size is 1000KB).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#write_buffer_size CcEndpoint#write_buffer_size}
    */
    readonly writeBufferSize?: number;
}
export class RedshiftSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._acceptAnyDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceptAnyDate = this._acceptAnyDate;
        }
        if (this._afterConnectScript !== undefined) {
            hasAnyValues = true;
            internalValueResult.afterConnectScript = this._afterConnectScript;
        }
        if (this._bucketFolder !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketFolder = this._bucketFolder;
        }
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._caseSensitiveNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.caseSensitiveNames = this._caseSensitiveNames;
        }
        if (this._compUpdate !== undefined) {
            hasAnyValues = true;
            internalValueResult.compUpdate = this._compUpdate;
        }
        if (this._connectionTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionTimeout = this._connectionTimeout;
        }
        if (this._dateFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateFormat = this._dateFormat;
        }
        if (this._emptyAsNull !== undefined) {
            hasAnyValues = true;
            internalValueResult.emptyAsNull = this._emptyAsNull;
        }
        if (this._encryptionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionMode = this._encryptionMode;
        }
        if (this._explicitIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.explicitIds = this._explicitIds;
        }
        if (this._fileTransferUploadStreams !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileTransferUploadStreams = this._fileTransferUploadStreams;
        }
        if (this._loadTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.loadTimeout = this._loadTimeout;
        }
        if (this._mapBooleanAsBoolean !== undefined) {
            hasAnyValues = true;
            internalValueResult.mapBooleanAsBoolean = this._mapBooleanAsBoolean;
        }
        if (this._maxFileSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxFileSize = this._maxFileSize;
        }
        if (this._removeQuotes !== undefined) {
            hasAnyValues = true;
            internalValueResult.removeQuotes = this._removeQuotes;
        }
        if (this._replaceChars !== undefined) {
            hasAnyValues = true;
            internalValueResult.replaceChars = this._replaceChars;
        }
        if (this._replaceInvalidChars !== undefined) {
            hasAnyValues = true;
            internalValueResult.replaceInvalidChars = this._replaceInvalidChars;
        }
        if (this._secretsManagerAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerAccessRoleArn = this._secretsManagerAccessRoleArn;
        }
        if (this._secretsManagerSecretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerSecretId = this._secretsManagerSecretId;
        }
        if (this._serverSideEncryptionKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverSideEncryptionKmsKeyId = this._serverSideEncryptionKmsKeyId;
        }
        if (this._serviceAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
        }
        if (this._timeFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeFormat = this._timeFormat;
        }
        if (this._trimBlanks !== undefined) {
            hasAnyValues = true;
            internalValueResult.trimBlanks = this._trimBlanks;
        }
        if (this._truncateColumns !== undefined) {
            hasAnyValues = true;
            internalValueResult.truncateColumns = this._truncateColumns;
        }
        if (this._writeBufferSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeBufferSize = this._writeBufferSize;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acceptAnyDate = undefined;
            this._afterConnectScript = undefined;
            this._bucketFolder = undefined;
            this._bucketName = undefined;
            this._caseSensitiveNames = undefined;
            this._compUpdate = undefined;
            this._connectionTimeout = undefined;
            this._dateFormat = undefined;
            this._emptyAsNull = undefined;
            this._encryptionMode = undefined;
            this._explicitIds = undefined;
            this._fileTransferUploadStreams = undefined;
            this._loadTimeout = undefined;
            this._mapBooleanAsBoolean = undefined;
            this._maxFileSize = undefined;
            this._removeQuotes = undefined;
            this._replaceChars = undefined;
            this._replaceInvalidChars = undefined;
            this._secretsManagerAccessRoleArn = undefined;
            this._secretsManagerSecretId = undefined;
            this._serverSideEncryptionKmsKeyId = undefined;
            this._serviceAccessRoleArn = undefined;
            this._timeFormat = undefined;
            this._trimBlanks = undefined;
            this._truncateColumns = undefined;
            this._writeBufferSize = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acceptAnyDate = value.acceptAnyDate;
            this._afterConnectScript = value.afterConnectScript;
            this._bucketFolder = value.bucketFolder;
            this._bucketName = value.bucketName;
            this._caseSensitiveNames = value.caseSensitiveNames;
            this._compUpdate = value.compUpdate;
            this._connectionTimeout = value.connectionTimeout;
            this._dateFormat = value.dateFormat;
            this._emptyAsNull = value.emptyAsNull;
            this._encryptionMode = value.encryptionMode;
            this._explicitIds = value.explicitIds;
            this._fileTransferUploadStreams = value.fileTransferUploadStreams;
            this._loadTimeout = value.loadTimeout;
            this._mapBooleanAsBoolean = value.mapBooleanAsBoolean;
            this._maxFileSize = value.maxFileSize;
            this._removeQuotes = value.removeQuotes;
            this._replaceChars = value.replaceChars;
            this._replaceInvalidChars = value.replaceInvalidChars;
            this._secretsManagerAccessRoleArn = value.secretsManagerAccessRoleArn;
            this._secretsManagerSecretId = value.secretsManagerSecretId;
            this._serverSideEncryptionKmsKeyId = value.serverSideEncryptionKmsKeyId;
            this._serviceAccessRoleArn = value.serviceAccessRoleArn;
            this._timeFormat = value.timeFormat;
            this._trimBlanks = value.trimBlanks;
            this._truncateColumns = value.truncateColumns;
            this._writeBufferSize = value.writeBufferSize;
        }
    }

    // accept_any_date - computed: true, optional: true, required: false
    private _acceptAnyDate?: boolean | cdktn.IResolvable; 
    public get acceptAnyDate() {
        return this.getBooleanAttribute('accept_any_date');
    }
    public set acceptAnyDate(value: boolean | cdktn.IResolvable) {
        this._acceptAnyDate = value;
    }
    public resetAcceptAnyDate() {
        this._acceptAnyDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptAnyDateInput() {
        return this._acceptAnyDate;
    }

    // after_connect_script - computed: true, optional: true, required: false
    private _afterConnectScript?: string; 
    public get afterConnectScript() {
        return this.getStringAttribute('after_connect_script');
    }
    public set afterConnectScript(value: string) {
        this._afterConnectScript = value;
    }
    public resetAfterConnectScript() {
        this._afterConnectScript = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get afterConnectScriptInput() {
        return this._afterConnectScript;
    }

    // bucket_folder - computed: true, optional: true, required: false
    private _bucketFolder?: string; 
    public get bucketFolder() {
        return this.getStringAttribute('bucket_folder');
    }
    public set bucketFolder(value: string) {
        this._bucketFolder = value;
    }
    public resetBucketFolder() {
        this._bucketFolder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketFolderInput() {
        return this._bucketFolder;
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // case_sensitive_names - computed: true, optional: true, required: false
    private _caseSensitiveNames?: boolean | cdktn.IResolvable; 
    public get caseSensitiveNames() {
        return this.getBooleanAttribute('case_sensitive_names');
    }
    public set caseSensitiveNames(value: boolean | cdktn.IResolvable) {
        this._caseSensitiveNames = value;
    }
    public resetCaseSensitiveNames() {
        this._caseSensitiveNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caseSensitiveNamesInput() {
        return this._caseSensitiveNames;
    }

    // comp_update - computed: true, optional: true, required: false
    private _compUpdate?: boolean | cdktn.IResolvable; 
    public get compUpdate() {
        return this.getBooleanAttribute('comp_update');
    }
    public set compUpdate(value: boolean | cdktn.IResolvable) {
        this._compUpdate = value;
    }
    public resetCompUpdate() {
        this._compUpdate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compUpdateInput() {
        return this._compUpdate;
    }

    // connection_timeout - computed: true, optional: true, required: false
    private _connectionTimeout?: number; 
    public get connectionTimeout() {
        return this.getNumberAttribute('connection_timeout');
    }
    public set connectionTimeout(value: number) {
        this._connectionTimeout = value;
    }
    public resetConnectionTimeout() {
        this._connectionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionTimeoutInput() {
        return this._connectionTimeout;
    }

    // date_format - computed: true, optional: true, required: false
    private _dateFormat?: string; 
    public get dateFormat() {
        return this.getStringAttribute('date_format');
    }
    public set dateFormat(value: string) {
        this._dateFormat = value;
    }
    public resetDateFormat() {
        this._dateFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateFormatInput() {
        return this._dateFormat;
    }

    // empty_as_null - computed: true, optional: true, required: false
    private _emptyAsNull?: boolean | cdktn.IResolvable; 
    public get emptyAsNull() {
        return this.getBooleanAttribute('empty_as_null');
    }
    public set emptyAsNull(value: boolean | cdktn.IResolvable) {
        this._emptyAsNull = value;
    }
    public resetEmptyAsNull() {
        this._emptyAsNull = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emptyAsNullInput() {
        return this._emptyAsNull;
    }

    // encryption_mode - computed: true, optional: true, required: false
    private _encryptionMode?: string; 
    public get encryptionMode() {
        return this.getStringAttribute('encryption_mode');
    }
    public set encryptionMode(value: string) {
        this._encryptionMode = value;
    }
    public resetEncryptionMode() {
        this._encryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionModeInput() {
        return this._encryptionMode;
    }

    // explicit_ids - computed: true, optional: true, required: false
    private _explicitIds?: boolean | cdktn.IResolvable; 
    public get explicitIds() {
        return this.getBooleanAttribute('explicit_ids');
    }
    public set explicitIds(value: boolean | cdktn.IResolvable) {
        this._explicitIds = value;
    }
    public resetExplicitIds() {
        this._explicitIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get explicitIdsInput() {
        return this._explicitIds;
    }

    // file_transfer_upload_streams - computed: true, optional: true, required: false
    private _fileTransferUploadStreams?: number; 
    public get fileTransferUploadStreams() {
        return this.getNumberAttribute('file_transfer_upload_streams');
    }
    public set fileTransferUploadStreams(value: number) {
        this._fileTransferUploadStreams = value;
    }
    public resetFileTransferUploadStreams() {
        this._fileTransferUploadStreams = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileTransferUploadStreamsInput() {
        return this._fileTransferUploadStreams;
    }

    // load_timeout - computed: true, optional: true, required: false
    private _loadTimeout?: number; 
    public get loadTimeout() {
        return this.getNumberAttribute('load_timeout');
    }
    public set loadTimeout(value: number) {
        this._loadTimeout = value;
    }
    public resetLoadTimeout() {
        this._loadTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loadTimeoutInput() {
        return this._loadTimeout;
    }

    // map_boolean_as_boolean - computed: true, optional: true, required: false
    private _mapBooleanAsBoolean?: boolean | cdktn.IResolvable; 
    public get mapBooleanAsBoolean() {
        return this.getBooleanAttribute('map_boolean_as_boolean');
    }
    public set mapBooleanAsBoolean(value: boolean | cdktn.IResolvable) {
        this._mapBooleanAsBoolean = value;
    }
    public resetMapBooleanAsBoolean() {
        this._mapBooleanAsBoolean = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mapBooleanAsBooleanInput() {
        return this._mapBooleanAsBoolean;
    }

    // max_file_size - computed: true, optional: true, required: false
    private _maxFileSize?: number; 
    public get maxFileSize() {
        return this.getNumberAttribute('max_file_size');
    }
    public set maxFileSize(value: number) {
        this._maxFileSize = value;
    }
    public resetMaxFileSize() {
        this._maxFileSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxFileSizeInput() {
        return this._maxFileSize;
    }

    // remove_quotes - computed: true, optional: true, required: false
    private _removeQuotes?: boolean | cdktn.IResolvable; 
    public get removeQuotes() {
        return this.getBooleanAttribute('remove_quotes');
    }
    public set removeQuotes(value: boolean | cdktn.IResolvable) {
        this._removeQuotes = value;
    }
    public resetRemoveQuotes() {
        this._removeQuotes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get removeQuotesInput() {
        return this._removeQuotes;
    }

    // replace_chars - computed: true, optional: true, required: false
    private _replaceChars?: string; 
    public get replaceChars() {
        return this.getStringAttribute('replace_chars');
    }
    public set replaceChars(value: string) {
        this._replaceChars = value;
    }
    public resetReplaceChars() {
        this._replaceChars = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replaceCharsInput() {
        return this._replaceChars;
    }

    // replace_invalid_chars - computed: true, optional: true, required: false
    private _replaceInvalidChars?: string; 
    public get replaceInvalidChars() {
        return this.getStringAttribute('replace_invalid_chars');
    }
    public set replaceInvalidChars(value: string) {
        this._replaceInvalidChars = value;
    }
    public resetReplaceInvalidChars() {
        this._replaceInvalidChars = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replaceInvalidCharsInput() {
        return this._replaceInvalidChars;
    }

    // secrets_manager_access_role_arn - computed: true, optional: true, required: false
    private _secretsManagerAccessRoleArn?: string; 
    public get secretsManagerAccessRoleArn() {
        return this.getStringAttribute('secrets_manager_access_role_arn');
    }
    public set secretsManagerAccessRoleArn(value: string) {
        this._secretsManagerAccessRoleArn = value;
    }
    public resetSecretsManagerAccessRoleArn() {
        this._secretsManagerAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerAccessRoleArnInput() {
        return this._secretsManagerAccessRoleArn;
    }

    // secrets_manager_secret_id - computed: true, optional: true, required: false
    private _secretsManagerSecretId?: string; 
    public get secretsManagerSecretId() {
        return this.getStringAttribute('secrets_manager_secret_id');
    }
    public set secretsManagerSecretId(value: string) {
        this._secretsManagerSecretId = value;
    }
    public resetSecretsManagerSecretId() {
        this._secretsManagerSecretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerSecretIdInput() {
        return this._secretsManagerSecretId;
    }

    // server_side_encryption_kms_key_id - computed: true, optional: true, required: false
    private _serverSideEncryptionKmsKeyId?: string; 
    public get serverSideEncryptionKmsKeyId() {
        return this.getStringAttribute('server_side_encryption_kms_key_id');
    }
    public set serverSideEncryptionKmsKeyId(value: string) {
        this._serverSideEncryptionKmsKeyId = value;
    }
    public resetServerSideEncryptionKmsKeyId() {
        this._serverSideEncryptionKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverSideEncryptionKmsKeyIdInput() {
        return this._serverSideEncryptionKmsKeyId;
    }

    // service_access_role_arn - computed: true, optional: true, required: false
    private _serviceAccessRoleArn?: string; 
    public get serviceAccessRoleArn() {
        return this.getStringAttribute('service_access_role_arn');
    }
    public set serviceAccessRoleArn(value: string) {
        this._serviceAccessRoleArn = value;
    }
    public resetServiceAccessRoleArn() {
        this._serviceAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccessRoleArnInput() {
        return this._serviceAccessRoleArn;
    }

    // time_format - computed: true, optional: true, required: false
    private _timeFormat?: string; 
    public get timeFormat() {
        return this.getStringAttribute('time_format');
    }
    public set timeFormat(value: string) {
        this._timeFormat = value;
    }
    public resetTimeFormat() {
        this._timeFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeFormatInput() {
        return this._timeFormat;
    }

    // trim_blanks - computed: true, optional: true, required: false
    private _trimBlanks?: boolean | cdktn.IResolvable; 
    public get trimBlanks() {
        return this.getBooleanAttribute('trim_blanks');
    }
    public set trimBlanks(value: boolean | cdktn.IResolvable) {
        this._trimBlanks = value;
    }
    public resetTrimBlanks() {
        this._trimBlanks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trimBlanksInput() {
        return this._trimBlanks;
    }

    // truncate_columns - computed: true, optional: true, required: false
    private _truncateColumns?: boolean | cdktn.IResolvable; 
    public get truncateColumns() {
        return this.getBooleanAttribute('truncate_columns');
    }
    public set truncateColumns(value: boolean | cdktn.IResolvable) {
        this._truncateColumns = value;
    }
    public resetTruncateColumns() {
        this._truncateColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get truncateColumnsInput() {
        return this._truncateColumns;
    }

    // write_buffer_size - computed: true, optional: true, required: false
    private _writeBufferSize?: number; 
    public get writeBufferSize() {
        return this.getNumberAttribute('write_buffer_size');
    }
    public set writeBufferSize(value: number) {
        this._writeBufferSize = value;
    }
    public resetWriteBufferSize() {
        this._writeBufferSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeBufferSizeInput() {
        return this._writeBufferSize;
    }
}
export interface S3SettingsProperty {
    /**
    * An optional parameter that, when set to true or y, you can use to add column name information to the .csv output file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#add_column_name CcEndpoint#add_column_name}
    */
    readonly addColumnName?: boolean | cdktn.IResolvable;
    /**
    * Use the S3 target endpoint setting AddTrailingPaddingCharacter to add padding on string data. The default value is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#add_trailing_padding_character CcEndpoint#add_trailing_padding_character}
    */
    readonly addTrailingPaddingCharacter?: boolean | cdktn.IResolvable;
    /**
    * An optional parameter to set a folder name in the S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#bucket_folder CcEndpoint#bucket_folder}
    */
    readonly bucketFolder?: string;
    /**
    * The name of the S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#bucket_name CcEndpoint#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * A value that enables AWS DMS to specify a predefined (canned) access control list (ACL) for objects created in an Amazon S3 bucket as .csv or .parquet files.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#canned_acl_for_objects CcEndpoint#canned_acl_for_objects}
    */
    readonly cannedAclForObjects?: string;
    /**
    * A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#cdc_inserts_and_updates CcEndpoint#cdc_inserts_and_updates}
    */
    readonly cdcInsertsAndUpdates?: boolean | cdktn.IResolvable;
    /**
    * A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the false setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#cdc_inserts_only CcEndpoint#cdc_inserts_only}
    */
    readonly cdcInsertsOnly?: boolean | cdktn.IResolvable;
    /**
    * Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#cdc_max_batch_interval CcEndpoint#cdc_max_batch_interval}
    */
    readonly cdcMaxBatchInterval?: number;
    /**
    * Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#cdc_min_file_size CcEndpoint#cdc_min_file_size}
    */
    readonly cdcMinFileSize?: number;
    /**
    * Specifies the folder path of CDC files. For an S3 source, this setting is required if a task captures change data; otherwise, it's optional.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#cdc_path CcEndpoint#cdc_path}
    */
    readonly cdcPath?: string;
    /**
    * An optional parameter. When set to GZIP it enables the service to compress the target files.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#compression_type CcEndpoint#compression_type}
    */
    readonly compressionType?: string;
    /**
    * The delimiter used to separate columns in the .csv file for both source and target. The default is a comma.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#csv_delimiter CcEndpoint#csv_delimiter}
    */
    readonly csvDelimiter?: string;
    /**
    * This setting only applies if your Amazon S3 output files during a change data capture (CDC) load are written in .csv format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#csv_no_sup_value CcEndpoint#csv_no_sup_value}
    */
    readonly csvNoSupValue?: string;
    /**
    * An optional parameter that specifies how AWS DMS treats null values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#csv_null_value CcEndpoint#csv_null_value}
    */
    readonly csvNullValue?: string;
    /**
    * The delimiter used to separate rows in the .csv file for both source and target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#csv_row_delimiter CcEndpoint#csv_row_delimiter}
    */
    readonly csvRowDelimiter?: string;
    /**
    * The format of the data that you want to use for output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#data_format CcEndpoint#data_format}
    */
    readonly dataFormat?: string;
    /**
    * The size of one data page in bytes. This parameter defaults to 1024 * 1024 bytes (1 MiB). This number is used for .parquet file format only.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#data_page_size CcEndpoint#data_page_size}
    */
    readonly dataPageSize?: number;
    /**
    * Specifies a date separating delimiter to use during folder partitioning. The default value is SLASH. Use this parameter when DatePartitionedEnabled is set to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#date_partition_delimiter CcEndpoint#date_partition_delimiter}
    */
    readonly datePartitionDelimiter?: string;
    /**
    * When set to true, this parameter partitions S3 bucket folders based on transaction commit dates. The default value is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#date_partition_enabled CcEndpoint#date_partition_enabled}
    */
    readonly datePartitionEnabled?: boolean | cdktn.IResolvable;
    /**
    * Identifies the sequence of the date format to use during folder partitioning. The default value is YYYYMMDD. Use this parameter when DatePartitionedEnabled is set to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#date_partition_sequence CcEndpoint#date_partition_sequence}
    */
    readonly datePartitionSequence?: string;
    /**
    * When creating an S3 target endpoint, set DatePartitionTimezone to convert the current UTC time into a specified time zone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#date_partition_timezone CcEndpoint#date_partition_timezone}
    */
    readonly datePartitionTimezone?: string;
    /**
    * The maximum size of an encoded dictionary page of a column
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#dict_page_size_limit CcEndpoint#dict_page_size_limit}
    */
    readonly dictPageSizeLimit?: number;
    /**
    * A value that enables statistics for Parquet pages and row groups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#enable_statistics CcEndpoint#enable_statistics}
    */
    readonly enableStatistics?: boolean | cdktn.IResolvable;
    /**
    * The type of encoding that you're using.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#encoding_type CcEndpoint#encoding_type}
    */
    readonly encodingType?: string;
    /**
    * The type of server-side encryption that you want to use for your data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#encryption_mode CcEndpoint#encryption_mode}
    */
    readonly encryptionMode?: string;
    /**
    * To specify a bucket owner and prevent sniping, you can use the ExpectedBucketOwner endpoint setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#expected_bucket_owner CcEndpoint#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * The external table definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#external_table_definition CcEndpoint#external_table_definition}
    */
    readonly externalTableDefinition?: string;
    /**
    * When true, allows AWS Glue to catalog your S3 bucket. Creating an AWS Glue catalog lets you use Athena to query your data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#glue_catalog_generation CcEndpoint#glue_catalog_generation}
    */
    readonly glueCatalogGeneration?: boolean | cdktn.IResolvable;
    /**
    * When this value is set to 1, AWS DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#ignore_header_rows CcEndpoint#ignore_header_rows}
    */
    readonly ignoreHeaderRows?: number;
    /**
    * A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#include_op_for_full_load CcEndpoint#include_op_for_full_load}
    */
    readonly includeOpForFullLoad?: boolean | cdktn.IResolvable;
    /**
    * A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#max_file_size CcEndpoint#max_file_size}
    */
    readonly maxFileSize?: number;
    /**
    * A value that specifies the precision of any TIMESTAMP column values that are written to an Amazon S3 object file in .parquet format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#parquet_timestamp_in_millisecond CcEndpoint#parquet_timestamp_in_millisecond}
    */
    readonly parquetTimestampInMillisecond?: boolean | cdktn.IResolvable;
    /**
    * The version of the Apache Parquet format that you want to use: parquet_1_0 (the default) or parquet_2_0.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#parquet_version CcEndpoint#parquet_version}
    */
    readonly parquetVersion?: string;
    /**
    * If this setting is set to true, AWS DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by CdcPath.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#preserve_transactions CcEndpoint#preserve_transactions}
    */
    readonly preserveTransactions?: boolean | cdktn.IResolvable;
    /**
    * For an S3 source, when this value is set to true or y, each leading double quotation mark has to be followed by an ending double quotation mark.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#rfc_4180 CcEndpoint#rfc_4180}
    */
    readonly rfc4180?: boolean | cdktn.IResolvable;
    /**
    * The number of rows in a row group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#row_group_length CcEndpoint#row_group_length}
    */
    readonly rowGroupLength?: number;
    /**
    * If you are using SSE_KMS for the EncryptionMode, provide the AWS KMS key ID. The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#server_side_encryption_kms_key_id CcEndpoint#server_side_encryption_kms_key_id}
    */
    readonly serverSideEncryptionKmsKeyId?: string;
    /**
    * A required parameter that specifies the Amazon Resource Name (ARN) used by the service to access the IAM role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#service_access_role_arn CcEndpoint#service_access_role_arn}
    */
    readonly serviceAccessRoleArn?: string;
    /**
    * A value that when nonblank causes AWS DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#timestamp_column_name CcEndpoint#timestamp_column_name}
    */
    readonly timestampColumnName?: string;
    /**
    * This setting applies if the S3 output files during a change data capture (CDC) load are written in .csv format. If this setting is set to true for columns not included in the supplemental log, AWS DMS uses the value specified by CsvNoSupValue. If this setting isn't set or is set to false, AWS DMS uses the null value for these columns.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#use_csv_no_sup_value CcEndpoint#use_csv_no_sup_value}
    */
    readonly useCsvNoSupValue?: boolean | cdktn.IResolvable;
    /**
    * When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#use_task_start_time_for_full_load_timestamp CcEndpoint#use_task_start_time_for_full_load_timestamp}
    */
    readonly useTaskStartTimeForFullLoadTimestamp?: boolean | cdktn.IResolvable;
}
export class S3SettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3SettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._addColumnName !== undefined) {
            hasAnyValues = true;
            internalValueResult.addColumnName = this._addColumnName;
        }
        if (this._addTrailingPaddingCharacter !== undefined) {
            hasAnyValues = true;
            internalValueResult.addTrailingPaddingCharacter = this._addTrailingPaddingCharacter;
        }
        if (this._bucketFolder !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketFolder = this._bucketFolder;
        }
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._cannedAclForObjects !== undefined) {
            hasAnyValues = true;
            internalValueResult.cannedAclForObjects = this._cannedAclForObjects;
        }
        if (this._cdcInsertsAndUpdates !== undefined) {
            hasAnyValues = true;
            internalValueResult.cdcInsertsAndUpdates = this._cdcInsertsAndUpdates;
        }
        if (this._cdcInsertsOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.cdcInsertsOnly = this._cdcInsertsOnly;
        }
        if (this._cdcMaxBatchInterval !== undefined) {
            hasAnyValues = true;
            internalValueResult.cdcMaxBatchInterval = this._cdcMaxBatchInterval;
        }
        if (this._cdcMinFileSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.cdcMinFileSize = this._cdcMinFileSize;
        }
        if (this._cdcPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.cdcPath = this._cdcPath;
        }
        if (this._compressionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.compressionType = this._compressionType;
        }
        if (this._csvDelimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.csvDelimiter = this._csvDelimiter;
        }
        if (this._csvNoSupValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.csvNoSupValue = this._csvNoSupValue;
        }
        if (this._csvNullValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.csvNullValue = this._csvNullValue;
        }
        if (this._csvRowDelimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.csvRowDelimiter = this._csvRowDelimiter;
        }
        if (this._dataFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataFormat = this._dataFormat;
        }
        if (this._dataPageSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataPageSize = this._dataPageSize;
        }
        if (this._datePartitionDelimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.datePartitionDelimiter = this._datePartitionDelimiter;
        }
        if (this._datePartitionEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.datePartitionEnabled = this._datePartitionEnabled;
        }
        if (this._datePartitionSequence !== undefined) {
            hasAnyValues = true;
            internalValueResult.datePartitionSequence = this._datePartitionSequence;
        }
        if (this._datePartitionTimezone !== undefined) {
            hasAnyValues = true;
            internalValueResult.datePartitionTimezone = this._datePartitionTimezone;
        }
        if (this._dictPageSizeLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.dictPageSizeLimit = this._dictPageSizeLimit;
        }
        if (this._enableStatistics !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableStatistics = this._enableStatistics;
        }
        if (this._encodingType !== undefined) {
            hasAnyValues = true;
            internalValueResult.encodingType = this._encodingType;
        }
        if (this._encryptionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionMode = this._encryptionMode;
        }
        if (this._expectedBucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.expectedBucketOwner = this._expectedBucketOwner;
        }
        if (this._externalTableDefinition !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalTableDefinition = this._externalTableDefinition;
        }
        if (this._glueCatalogGeneration !== undefined) {
            hasAnyValues = true;
            internalValueResult.glueCatalogGeneration = this._glueCatalogGeneration;
        }
        if (this._ignoreHeaderRows !== undefined) {
            hasAnyValues = true;
            internalValueResult.ignoreHeaderRows = this._ignoreHeaderRows;
        }
        if (this._includeOpForFullLoad !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeOpForFullLoad = this._includeOpForFullLoad;
        }
        if (this._maxFileSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxFileSize = this._maxFileSize;
        }
        if (this._parquetTimestampInMillisecond !== undefined) {
            hasAnyValues = true;
            internalValueResult.parquetTimestampInMillisecond = this._parquetTimestampInMillisecond;
        }
        if (this._parquetVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.parquetVersion = this._parquetVersion;
        }
        if (this._preserveTransactions !== undefined) {
            hasAnyValues = true;
            internalValueResult.preserveTransactions = this._preserveTransactions;
        }
        if (this._rfc4180 !== undefined) {
            hasAnyValues = true;
            internalValueResult.rfc4180 = this._rfc4180;
        }
        if (this._rowGroupLength !== undefined) {
            hasAnyValues = true;
            internalValueResult.rowGroupLength = this._rowGroupLength;
        }
        if (this._serverSideEncryptionKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverSideEncryptionKmsKeyId = this._serverSideEncryptionKmsKeyId;
        }
        if (this._serviceAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceAccessRoleArn = this._serviceAccessRoleArn;
        }
        if (this._timestampColumnName !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestampColumnName = this._timestampColumnName;
        }
        if (this._useCsvNoSupValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.useCsvNoSupValue = this._useCsvNoSupValue;
        }
        if (this._useTaskStartTimeForFullLoadTimestamp !== undefined) {
            hasAnyValues = true;
            internalValueResult.useTaskStartTimeForFullLoadTimestamp = this._useTaskStartTimeForFullLoadTimestamp;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3SettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._addColumnName = undefined;
            this._addTrailingPaddingCharacter = undefined;
            this._bucketFolder = undefined;
            this._bucketName = undefined;
            this._cannedAclForObjects = undefined;
            this._cdcInsertsAndUpdates = undefined;
            this._cdcInsertsOnly = undefined;
            this._cdcMaxBatchInterval = undefined;
            this._cdcMinFileSize = undefined;
            this._cdcPath = undefined;
            this._compressionType = undefined;
            this._csvDelimiter = undefined;
            this._csvNoSupValue = undefined;
            this._csvNullValue = undefined;
            this._csvRowDelimiter = undefined;
            this._dataFormat = undefined;
            this._dataPageSize = undefined;
            this._datePartitionDelimiter = undefined;
            this._datePartitionEnabled = undefined;
            this._datePartitionSequence = undefined;
            this._datePartitionTimezone = undefined;
            this._dictPageSizeLimit = undefined;
            this._enableStatistics = undefined;
            this._encodingType = undefined;
            this._encryptionMode = undefined;
            this._expectedBucketOwner = undefined;
            this._externalTableDefinition = undefined;
            this._glueCatalogGeneration = undefined;
            this._ignoreHeaderRows = undefined;
            this._includeOpForFullLoad = undefined;
            this._maxFileSize = undefined;
            this._parquetTimestampInMillisecond = undefined;
            this._parquetVersion = undefined;
            this._preserveTransactions = undefined;
            this._rfc4180 = undefined;
            this._rowGroupLength = undefined;
            this._serverSideEncryptionKmsKeyId = undefined;
            this._serviceAccessRoleArn = undefined;
            this._timestampColumnName = undefined;
            this._useCsvNoSupValue = undefined;
            this._useTaskStartTimeForFullLoadTimestamp = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._addColumnName = value.addColumnName;
            this._addTrailingPaddingCharacter = value.addTrailingPaddingCharacter;
            this._bucketFolder = value.bucketFolder;
            this._bucketName = value.bucketName;
            this._cannedAclForObjects = value.cannedAclForObjects;
            this._cdcInsertsAndUpdates = value.cdcInsertsAndUpdates;
            this._cdcInsertsOnly = value.cdcInsertsOnly;
            this._cdcMaxBatchInterval = value.cdcMaxBatchInterval;
            this._cdcMinFileSize = value.cdcMinFileSize;
            this._cdcPath = value.cdcPath;
            this._compressionType = value.compressionType;
            this._csvDelimiter = value.csvDelimiter;
            this._csvNoSupValue = value.csvNoSupValue;
            this._csvNullValue = value.csvNullValue;
            this._csvRowDelimiter = value.csvRowDelimiter;
            this._dataFormat = value.dataFormat;
            this._dataPageSize = value.dataPageSize;
            this._datePartitionDelimiter = value.datePartitionDelimiter;
            this._datePartitionEnabled = value.datePartitionEnabled;
            this._datePartitionSequence = value.datePartitionSequence;
            this._datePartitionTimezone = value.datePartitionTimezone;
            this._dictPageSizeLimit = value.dictPageSizeLimit;
            this._enableStatistics = value.enableStatistics;
            this._encodingType = value.encodingType;
            this._encryptionMode = value.encryptionMode;
            this._expectedBucketOwner = value.expectedBucketOwner;
            this._externalTableDefinition = value.externalTableDefinition;
            this._glueCatalogGeneration = value.glueCatalogGeneration;
            this._ignoreHeaderRows = value.ignoreHeaderRows;
            this._includeOpForFullLoad = value.includeOpForFullLoad;
            this._maxFileSize = value.maxFileSize;
            this._parquetTimestampInMillisecond = value.parquetTimestampInMillisecond;
            this._parquetVersion = value.parquetVersion;
            this._preserveTransactions = value.preserveTransactions;
            this._rfc4180 = value.rfc4180;
            this._rowGroupLength = value.rowGroupLength;
            this._serverSideEncryptionKmsKeyId = value.serverSideEncryptionKmsKeyId;
            this._serviceAccessRoleArn = value.serviceAccessRoleArn;
            this._timestampColumnName = value.timestampColumnName;
            this._useCsvNoSupValue = value.useCsvNoSupValue;
            this._useTaskStartTimeForFullLoadTimestamp = value.useTaskStartTimeForFullLoadTimestamp;
        }
    }

    // add_column_name - computed: true, optional: true, required: false
    private _addColumnName?: boolean | cdktn.IResolvable; 
    public get addColumnName() {
        return this.getBooleanAttribute('add_column_name');
    }
    public set addColumnName(value: boolean | cdktn.IResolvable) {
        this._addColumnName = value;
    }
    public resetAddColumnName() {
        this._addColumnName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addColumnNameInput() {
        return this._addColumnName;
    }

    // add_trailing_padding_character - computed: true, optional: true, required: false
    private _addTrailingPaddingCharacter?: boolean | cdktn.IResolvable; 
    public get addTrailingPaddingCharacter() {
        return this.getBooleanAttribute('add_trailing_padding_character');
    }
    public set addTrailingPaddingCharacter(value: boolean | cdktn.IResolvable) {
        this._addTrailingPaddingCharacter = value;
    }
    public resetAddTrailingPaddingCharacter() {
        this._addTrailingPaddingCharacter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addTrailingPaddingCharacterInput() {
        return this._addTrailingPaddingCharacter;
    }

    // bucket_folder - computed: true, optional: true, required: false
    private _bucketFolder?: string; 
    public get bucketFolder() {
        return this.getStringAttribute('bucket_folder');
    }
    public set bucketFolder(value: string) {
        this._bucketFolder = value;
    }
    public resetBucketFolder() {
        this._bucketFolder = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketFolderInput() {
        return this._bucketFolder;
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // canned_acl_for_objects - computed: true, optional: true, required: false
    private _cannedAclForObjects?: string; 
    public get cannedAclForObjects() {
        return this.getStringAttribute('canned_acl_for_objects');
    }
    public set cannedAclForObjects(value: string) {
        this._cannedAclForObjects = value;
    }
    public resetCannedAclForObjects() {
        this._cannedAclForObjects = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cannedAclForObjectsInput() {
        return this._cannedAclForObjects;
    }

    // cdc_inserts_and_updates - computed: true, optional: true, required: false
    private _cdcInsertsAndUpdates?: boolean | cdktn.IResolvable; 
    public get cdcInsertsAndUpdates() {
        return this.getBooleanAttribute('cdc_inserts_and_updates');
    }
    public set cdcInsertsAndUpdates(value: boolean | cdktn.IResolvable) {
        this._cdcInsertsAndUpdates = value;
    }
    public resetCdcInsertsAndUpdates() {
        this._cdcInsertsAndUpdates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdcInsertsAndUpdatesInput() {
        return this._cdcInsertsAndUpdates;
    }

    // cdc_inserts_only - computed: true, optional: true, required: false
    private _cdcInsertsOnly?: boolean | cdktn.IResolvable; 
    public get cdcInsertsOnly() {
        return this.getBooleanAttribute('cdc_inserts_only');
    }
    public set cdcInsertsOnly(value: boolean | cdktn.IResolvable) {
        this._cdcInsertsOnly = value;
    }
    public resetCdcInsertsOnly() {
        this._cdcInsertsOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdcInsertsOnlyInput() {
        return this._cdcInsertsOnly;
    }

    // cdc_max_batch_interval - computed: true, optional: true, required: false
    private _cdcMaxBatchInterval?: number; 
    public get cdcMaxBatchInterval() {
        return this.getNumberAttribute('cdc_max_batch_interval');
    }
    public set cdcMaxBatchInterval(value: number) {
        this._cdcMaxBatchInterval = value;
    }
    public resetCdcMaxBatchInterval() {
        this._cdcMaxBatchInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdcMaxBatchIntervalInput() {
        return this._cdcMaxBatchInterval;
    }

    // cdc_min_file_size - computed: true, optional: true, required: false
    private _cdcMinFileSize?: number; 
    public get cdcMinFileSize() {
        return this.getNumberAttribute('cdc_min_file_size');
    }
    public set cdcMinFileSize(value: number) {
        this._cdcMinFileSize = value;
    }
    public resetCdcMinFileSize() {
        this._cdcMinFileSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdcMinFileSizeInput() {
        return this._cdcMinFileSize;
    }

    // cdc_path - computed: true, optional: true, required: false
    private _cdcPath?: string; 
    public get cdcPath() {
        return this.getStringAttribute('cdc_path');
    }
    public set cdcPath(value: string) {
        this._cdcPath = value;
    }
    public resetCdcPath() {
        this._cdcPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdcPathInput() {
        return this._cdcPath;
    }

    // compression_type - computed: true, optional: true, required: false
    private _compressionType?: string; 
    public get compressionType() {
        return this.getStringAttribute('compression_type');
    }
    public set compressionType(value: string) {
        this._compressionType = value;
    }
    public resetCompressionType() {
        this._compressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionTypeInput() {
        return this._compressionType;
    }

    // csv_delimiter - computed: true, optional: true, required: false
    private _csvDelimiter?: string; 
    public get csvDelimiter() {
        return this.getStringAttribute('csv_delimiter');
    }
    public set csvDelimiter(value: string) {
        this._csvDelimiter = value;
    }
    public resetCsvDelimiter() {
        this._csvDelimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvDelimiterInput() {
        return this._csvDelimiter;
    }

    // csv_no_sup_value - computed: true, optional: true, required: false
    private _csvNoSupValue?: string; 
    public get csvNoSupValue() {
        return this.getStringAttribute('csv_no_sup_value');
    }
    public set csvNoSupValue(value: string) {
        this._csvNoSupValue = value;
    }
    public resetCsvNoSupValue() {
        this._csvNoSupValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvNoSupValueInput() {
        return this._csvNoSupValue;
    }

    // csv_null_value - computed: true, optional: true, required: false
    private _csvNullValue?: string; 
    public get csvNullValue() {
        return this.getStringAttribute('csv_null_value');
    }
    public set csvNullValue(value: string) {
        this._csvNullValue = value;
    }
    public resetCsvNullValue() {
        this._csvNullValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvNullValueInput() {
        return this._csvNullValue;
    }

    // csv_row_delimiter - computed: true, optional: true, required: false
    private _csvRowDelimiter?: string; 
    public get csvRowDelimiter() {
        return this.getStringAttribute('csv_row_delimiter');
    }
    public set csvRowDelimiter(value: string) {
        this._csvRowDelimiter = value;
    }
    public resetCsvRowDelimiter() {
        this._csvRowDelimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get csvRowDelimiterInput() {
        return this._csvRowDelimiter;
    }

    // data_format - computed: true, optional: true, required: false
    private _dataFormat?: string; 
    public get dataFormat() {
        return this.getStringAttribute('data_format');
    }
    public set dataFormat(value: string) {
        this._dataFormat = value;
    }
    public resetDataFormat() {
        this._dataFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataFormatInput() {
        return this._dataFormat;
    }

    // data_page_size - computed: true, optional: true, required: false
    private _dataPageSize?: number; 
    public get dataPageSize() {
        return this.getNumberAttribute('data_page_size');
    }
    public set dataPageSize(value: number) {
        this._dataPageSize = value;
    }
    public resetDataPageSize() {
        this._dataPageSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataPageSizeInput() {
        return this._dataPageSize;
    }

    // date_partition_delimiter - computed: true, optional: true, required: false
    private _datePartitionDelimiter?: string; 
    public get datePartitionDelimiter() {
        return this.getStringAttribute('date_partition_delimiter');
    }
    public set datePartitionDelimiter(value: string) {
        this._datePartitionDelimiter = value;
    }
    public resetDatePartitionDelimiter() {
        this._datePartitionDelimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datePartitionDelimiterInput() {
        return this._datePartitionDelimiter;
    }

    // date_partition_enabled - computed: true, optional: true, required: false
    private _datePartitionEnabled?: boolean | cdktn.IResolvable; 
    public get datePartitionEnabled() {
        return this.getBooleanAttribute('date_partition_enabled');
    }
    public set datePartitionEnabled(value: boolean | cdktn.IResolvable) {
        this._datePartitionEnabled = value;
    }
    public resetDatePartitionEnabled() {
        this._datePartitionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datePartitionEnabledInput() {
        return this._datePartitionEnabled;
    }

    // date_partition_sequence - computed: true, optional: true, required: false
    private _datePartitionSequence?: string; 
    public get datePartitionSequence() {
        return this.getStringAttribute('date_partition_sequence');
    }
    public set datePartitionSequence(value: string) {
        this._datePartitionSequence = value;
    }
    public resetDatePartitionSequence() {
        this._datePartitionSequence = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datePartitionSequenceInput() {
        return this._datePartitionSequence;
    }

    // date_partition_timezone - computed: true, optional: true, required: false
    private _datePartitionTimezone?: string; 
    public get datePartitionTimezone() {
        return this.getStringAttribute('date_partition_timezone');
    }
    public set datePartitionTimezone(value: string) {
        this._datePartitionTimezone = value;
    }
    public resetDatePartitionTimezone() {
        this._datePartitionTimezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datePartitionTimezoneInput() {
        return this._datePartitionTimezone;
    }

    // dict_page_size_limit - computed: true, optional: true, required: false
    private _dictPageSizeLimit?: number; 
    public get dictPageSizeLimit() {
        return this.getNumberAttribute('dict_page_size_limit');
    }
    public set dictPageSizeLimit(value: number) {
        this._dictPageSizeLimit = value;
    }
    public resetDictPageSizeLimit() {
        this._dictPageSizeLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dictPageSizeLimitInput() {
        return this._dictPageSizeLimit;
    }

    // enable_statistics - computed: true, optional: true, required: false
    private _enableStatistics?: boolean | cdktn.IResolvable; 
    public get enableStatistics() {
        return this.getBooleanAttribute('enable_statistics');
    }
    public set enableStatistics(value: boolean | cdktn.IResolvable) {
        this._enableStatistics = value;
    }
    public resetEnableStatistics() {
        this._enableStatistics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableStatisticsInput() {
        return this._enableStatistics;
    }

    // encoding_type - computed: true, optional: true, required: false
    private _encodingType?: string; 
    public get encodingType() {
        return this.getStringAttribute('encoding_type');
    }
    public set encodingType(value: string) {
        this._encodingType = value;
    }
    public resetEncodingType() {
        this._encodingType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encodingTypeInput() {
        return this._encodingType;
    }

    // encryption_mode - computed: true, optional: true, required: false
    private _encryptionMode?: string; 
    public get encryptionMode() {
        return this.getStringAttribute('encryption_mode');
    }
    public set encryptionMode(value: string) {
        this._encryptionMode = value;
    }
    public resetEncryptionMode() {
        this._encryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionModeInput() {
        return this._encryptionMode;
    }

    // expected_bucket_owner - computed: true, optional: true, required: false
    private _expectedBucketOwner?: string; 
    public get expectedBucketOwner() {
        return this.getStringAttribute('expected_bucket_owner');
    }
    public set expectedBucketOwner(value: string) {
        this._expectedBucketOwner = value;
    }
    public resetExpectedBucketOwner() {
        this._expectedBucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expectedBucketOwnerInput() {
        return this._expectedBucketOwner;
    }

    // external_table_definition - computed: true, optional: true, required: false
    private _externalTableDefinition?: string; 
    public get externalTableDefinition() {
        return this.getStringAttribute('external_table_definition');
    }
    public set externalTableDefinition(value: string) {
        this._externalTableDefinition = value;
    }
    public resetExternalTableDefinition() {
        this._externalTableDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalTableDefinitionInput() {
        return this._externalTableDefinition;
    }

    // glue_catalog_generation - computed: true, optional: true, required: false
    private _glueCatalogGeneration?: boolean | cdktn.IResolvable; 
    public get glueCatalogGeneration() {
        return this.getBooleanAttribute('glue_catalog_generation');
    }
    public set glueCatalogGeneration(value: boolean | cdktn.IResolvable) {
        this._glueCatalogGeneration = value;
    }
    public resetGlueCatalogGeneration() {
        this._glueCatalogGeneration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueCatalogGenerationInput() {
        return this._glueCatalogGeneration;
    }

    // ignore_header_rows - computed: true, optional: true, required: false
    private _ignoreHeaderRows?: number; 
    public get ignoreHeaderRows() {
        return this.getNumberAttribute('ignore_header_rows');
    }
    public set ignoreHeaderRows(value: number) {
        this._ignoreHeaderRows = value;
    }
    public resetIgnoreHeaderRows() {
        this._ignoreHeaderRows = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignoreHeaderRowsInput() {
        return this._ignoreHeaderRows;
    }

    // include_op_for_full_load - computed: true, optional: true, required: false
    private _includeOpForFullLoad?: boolean | cdktn.IResolvable; 
    public get includeOpForFullLoad() {
        return this.getBooleanAttribute('include_op_for_full_load');
    }
    public set includeOpForFullLoad(value: boolean | cdktn.IResolvable) {
        this._includeOpForFullLoad = value;
    }
    public resetIncludeOpForFullLoad() {
        this._includeOpForFullLoad = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeOpForFullLoadInput() {
        return this._includeOpForFullLoad;
    }

    // max_file_size - computed: true, optional: true, required: false
    private _maxFileSize?: number; 
    public get maxFileSize() {
        return this.getNumberAttribute('max_file_size');
    }
    public set maxFileSize(value: number) {
        this._maxFileSize = value;
    }
    public resetMaxFileSize() {
        this._maxFileSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxFileSizeInput() {
        return this._maxFileSize;
    }

    // parquet_timestamp_in_millisecond - computed: true, optional: true, required: false
    private _parquetTimestampInMillisecond?: boolean | cdktn.IResolvable; 
    public get parquetTimestampInMillisecond() {
        return this.getBooleanAttribute('parquet_timestamp_in_millisecond');
    }
    public set parquetTimestampInMillisecond(value: boolean | cdktn.IResolvable) {
        this._parquetTimestampInMillisecond = value;
    }
    public resetParquetTimestampInMillisecond() {
        this._parquetTimestampInMillisecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parquetTimestampInMillisecondInput() {
        return this._parquetTimestampInMillisecond;
    }

    // parquet_version - computed: true, optional: true, required: false
    private _parquetVersion?: string; 
    public get parquetVersion() {
        return this.getStringAttribute('parquet_version');
    }
    public set parquetVersion(value: string) {
        this._parquetVersion = value;
    }
    public resetParquetVersion() {
        this._parquetVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parquetVersionInput() {
        return this._parquetVersion;
    }

    // preserve_transactions - computed: true, optional: true, required: false
    private _preserveTransactions?: boolean | cdktn.IResolvable; 
    public get preserveTransactions() {
        return this.getBooleanAttribute('preserve_transactions');
    }
    public set preserveTransactions(value: boolean | cdktn.IResolvable) {
        this._preserveTransactions = value;
    }
    public resetPreserveTransactions() {
        this._preserveTransactions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preserveTransactionsInput() {
        return this._preserveTransactions;
    }

    // rfc_4180 - computed: true, optional: true, required: false
    private _rfc4180?: boolean | cdktn.IResolvable; 
    public get rfc4180() {
        return this.getBooleanAttribute('rfc_4180');
    }
    public set rfc4180(value: boolean | cdktn.IResolvable) {
        this._rfc4180 = value;
    }
    public resetRfc4180() {
        this._rfc4180 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rfc4180Input() {
        return this._rfc4180;
    }

    // row_group_length - computed: true, optional: true, required: false
    private _rowGroupLength?: number; 
    public get rowGroupLength() {
        return this.getNumberAttribute('row_group_length');
    }
    public set rowGroupLength(value: number) {
        this._rowGroupLength = value;
    }
    public resetRowGroupLength() {
        this._rowGroupLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rowGroupLengthInput() {
        return this._rowGroupLength;
    }

    // server_side_encryption_kms_key_id - computed: true, optional: true, required: false
    private _serverSideEncryptionKmsKeyId?: string; 
    public get serverSideEncryptionKmsKeyId() {
        return this.getStringAttribute('server_side_encryption_kms_key_id');
    }
    public set serverSideEncryptionKmsKeyId(value: string) {
        this._serverSideEncryptionKmsKeyId = value;
    }
    public resetServerSideEncryptionKmsKeyId() {
        this._serverSideEncryptionKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverSideEncryptionKmsKeyIdInput() {
        return this._serverSideEncryptionKmsKeyId;
    }

    // service_access_role_arn - computed: true, optional: true, required: false
    private _serviceAccessRoleArn?: string; 
    public get serviceAccessRoleArn() {
        return this.getStringAttribute('service_access_role_arn');
    }
    public set serviceAccessRoleArn(value: string) {
        this._serviceAccessRoleArn = value;
    }
    public resetServiceAccessRoleArn() {
        this._serviceAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceAccessRoleArnInput() {
        return this._serviceAccessRoleArn;
    }

    // timestamp_column_name - computed: true, optional: true, required: false
    private _timestampColumnName?: string; 
    public get timestampColumnName() {
        return this.getStringAttribute('timestamp_column_name');
    }
    public set timestampColumnName(value: string) {
        this._timestampColumnName = value;
    }
    public resetTimestampColumnName() {
        this._timestampColumnName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampColumnNameInput() {
        return this._timestampColumnName;
    }

    // use_csv_no_sup_value - computed: true, optional: true, required: false
    private _useCsvNoSupValue?: boolean | cdktn.IResolvable; 
    public get useCsvNoSupValue() {
        return this.getBooleanAttribute('use_csv_no_sup_value');
    }
    public set useCsvNoSupValue(value: boolean | cdktn.IResolvable) {
        this._useCsvNoSupValue = value;
    }
    public resetUseCsvNoSupValue() {
        this._useCsvNoSupValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useCsvNoSupValueInput() {
        return this._useCsvNoSupValue;
    }

    // use_task_start_time_for_full_load_timestamp - computed: true, optional: true, required: false
    private _useTaskStartTimeForFullLoadTimestamp?: boolean | cdktn.IResolvable; 
    public get useTaskStartTimeForFullLoadTimestamp() {
        return this.getBooleanAttribute('use_task_start_time_for_full_load_timestamp');
    }
    public set useTaskStartTimeForFullLoadTimestamp(value: boolean | cdktn.IResolvable) {
        this._useTaskStartTimeForFullLoadTimestamp = value;
    }
    public resetUseTaskStartTimeForFullLoadTimestamp() {
        this._useTaskStartTimeForFullLoadTimestamp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useTaskStartTimeForFullLoadTimestampInput() {
        return this._useTaskStartTimeForFullLoadTimestamp;
    }
}
export interface SybaseSettingsProperty {
    /**
    * The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_access_role_arn CcEndpoint#secrets_manager_access_role_arn}
    */
    readonly secretsManagerAccessRoleArn?: string;
    /**
    * The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the SAP SAE endpoint connection details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#secrets_manager_secret_id CcEndpoint#secrets_manager_secret_id}
    */
    readonly secretsManagerSecretId?: string;
}
export class SybaseSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SybaseSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._secretsManagerAccessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerAccessRoleArn = this._secretsManagerAccessRoleArn;
        }
        if (this._secretsManagerSecretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretsManagerSecretId = this._secretsManagerSecretId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SybaseSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._secretsManagerAccessRoleArn = undefined;
            this._secretsManagerSecretId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._secretsManagerAccessRoleArn = value.secretsManagerAccessRoleArn;
            this._secretsManagerSecretId = value.secretsManagerSecretId;
        }
    }

    // secrets_manager_access_role_arn - computed: true, optional: true, required: false
    private _secretsManagerAccessRoleArn?: string; 
    public get secretsManagerAccessRoleArn() {
        return this.getStringAttribute('secrets_manager_access_role_arn');
    }
    public set secretsManagerAccessRoleArn(value: string) {
        this._secretsManagerAccessRoleArn = value;
    }
    public resetSecretsManagerAccessRoleArn() {
        this._secretsManagerAccessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerAccessRoleArnInput() {
        return this._secretsManagerAccessRoleArn;
    }

    // secrets_manager_secret_id - computed: true, optional: true, required: false
    private _secretsManagerSecretId?: string; 
    public get secretsManagerSecretId() {
        return this.getStringAttribute('secrets_manager_secret_id');
    }
    public set secretsManagerSecretId(value: string) {
        this._secretsManagerSecretId = value;
    }
    public resetSecretsManagerSecretId() {
        this._secretsManagerSecretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerSecretIdInput() {
        return this._secretsManagerSecretId;
    }
}
export interface TagProperty {
    /**
    * A key is the required name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#key CcEndpoint#key}
    */
    readonly key?: string;
    /**
    * A value is the optional value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/dms_endpoint#value CcEndpoint#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
