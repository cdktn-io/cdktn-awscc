// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcServiceProps extends cdktn.TerraformMetaArguments {
    /**
    * Autoscaling configuration ARN
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#auto_scaling_configuration_arn CcService#auto_scaling_configuration_arn}
    */
    readonly autoScalingConfigurationArn?: string;
    /**
    * Encryption configuration (KMS key)
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#encryption_configuration CcService#encryption_configuration}
    */
    readonly encryptionConfiguration?: CcService.EncryptionConfigurationProperty;
    /**
    * Health check configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#health_check_configuration CcService#health_check_configuration}
    */
    readonly healthCheckConfiguration?: CcService.HealthCheckConfigurationProperty;
    /**
    * Instance Configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#instance_configuration CcService#instance_configuration}
    */
    readonly instanceConfiguration?: CcService.InstanceConfigurationProperty;
    /**
    * Network configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#network_configuration CcService#network_configuration}
    */
    readonly networkConfiguration?: CcService.NetworkConfigurationProperty;
    /**
    * Service observability configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#observability_configuration CcService#observability_configuration}
    */
    readonly observabilityConfiguration?: CcService.ServiceObservabilityConfigurationProperty;
    /**
    * The AppRunner Service Name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#service_name CcService#service_name}
    */
    readonly serviceName?: string;
    /**
    * Source Code configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#source_configuration CcService#source_configuration}
    */
    readonly sourceConfiguration: CcService.SourceConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#tags CcService#tags}
    */
    readonly tags?: CcService.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service awscc_apprunner_service}
*/
export class CcService extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apprunner_service";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcService resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcService to import
    * @param importFromId The id of the existing CcService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcService to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apprunner_service", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service awscc_apprunner_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcServiceProps
    */
    public constructor(scope: Construct, id: string, config: CcServiceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_apprunner_service',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._autoScalingConfigurationArn = config.autoScalingConfigurationArn;
        this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
        this._healthCheckConfiguration.internalValue = config.healthCheckConfiguration;
        this._instanceConfiguration.internalValue = config.instanceConfiguration;
        this._networkConfiguration.internalValue = config.networkConfiguration;
        this._observabilityConfiguration.internalValue = config.observabilityConfiguration;
        this._serviceName = config.serviceName;
        this._sourceConfiguration.internalValue = config.sourceConfiguration;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // auto_scaling_configuration_arn - computed: true, optional: true, required: false
    private _autoScalingConfigurationArn?: string; 
    public get autoScalingConfigurationArn() {
        return this.getStringAttribute('auto_scaling_configuration_arn');
    }
    public set autoScalingConfigurationArn(value: string) {
        this._autoScalingConfigurationArn = value;
    }
    public resetAutoScalingConfigurationArn() {
        this._autoScalingConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingConfigurationArnInput() {
        return this._autoScalingConfigurationArn;
    }

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new CcService.EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: CcService.EncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }

    // health_check_configuration - computed: true, optional: true, required: false
    private _healthCheckConfiguration = new CcService.HealthCheckConfigurationPropertyOutputReference(this, "health_check_configuration");
    public get healthCheckConfiguration() {
        return this._healthCheckConfiguration;
    }
    public putHealthCheckConfiguration(value: CcService.HealthCheckConfigurationProperty) {
        this._healthCheckConfiguration.internalValue = value;
    }
    public resetHealthCheckConfiguration() {
        this._healthCheckConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthCheckConfigurationInput() {
        return this._healthCheckConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_configuration - computed: true, optional: true, required: false
    private _instanceConfiguration = new CcService.InstanceConfigurationPropertyOutputReference(this, "instance_configuration");
    public get instanceConfiguration() {
        return this._instanceConfiguration;
    }
    public putInstanceConfiguration(value: CcService.InstanceConfigurationProperty) {
        this._instanceConfiguration.internalValue = value;
    }
    public resetInstanceConfiguration() {
        this._instanceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceConfigurationInput() {
        return this._instanceConfiguration.internalValue;
    }

    // network_configuration - computed: true, optional: true, required: false
    private _networkConfiguration = new CcService.NetworkConfigurationPropertyOutputReference(this, "network_configuration");
    public get networkConfiguration() {
        return this._networkConfiguration;
    }
    public putNetworkConfiguration(value: CcService.NetworkConfigurationProperty) {
        this._networkConfiguration.internalValue = value;
    }
    public resetNetworkConfiguration() {
        this._networkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigurationInput() {
        return this._networkConfiguration.internalValue;
    }

    // observability_configuration - computed: true, optional: true, required: false
    private _observabilityConfiguration = new CcService.ServiceObservabilityConfigurationPropertyOutputReference(this, "observability_configuration");
    public get observabilityConfiguration() {
        return this._observabilityConfiguration;
    }
    public putObservabilityConfiguration(value: CcService.ServiceObservabilityConfigurationProperty) {
        this._observabilityConfiguration.internalValue = value;
    }
    public resetObservabilityConfiguration() {
        this._observabilityConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get observabilityConfigurationInput() {
        return this._observabilityConfiguration.internalValue;
    }

    // service_arn - computed: true, optional: false, required: false
    public get serviceArn() {
        return this.getStringAttribute('service_arn');
    }

    // service_id - computed: true, optional: false, required: false
    public get serviceId() {
        return this.getStringAttribute('service_id');
    }

    // service_name - computed: true, optional: true, required: false
    private _serviceName?: string; 
    public get serviceName() {
        return this.getStringAttribute('service_name');
    }
    public set serviceName(value: string) {
        this._serviceName = value;
    }
    public resetServiceName() {
        this._serviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNameInput() {
        return this._serviceName;
    }

    // service_url - computed: true, optional: false, required: false
    public get serviceUrl() {
        return this.getStringAttribute('service_url');
    }

    // source_configuration - computed: false, optional: false, required: true
    private _sourceConfiguration = new CcService.SourceConfigurationPropertyOutputReference(this, "source_configuration");
    public get sourceConfiguration() {
        return this._sourceConfiguration;
    }
    public putSourceConfiguration(value: CcService.SourceConfigurationProperty) {
        this._sourceConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceConfigurationInput() {
        return this._sourceConfiguration.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcService.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcService.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auto_scaling_configuration_arn: cdktn.stringToTerraform(this._autoScalingConfigurationArn),
            encryption_configuration: ccServiceEncryptionConfigurationPropertyToTerraform(this._encryptionConfiguration.internalValue),
            health_check_configuration: ccServiceHealthCheckConfigurationPropertyToTerraform(this._healthCheckConfiguration.internalValue),
            instance_configuration: ccServiceInstanceConfigurationPropertyToTerraform(this._instanceConfiguration.internalValue),
            network_configuration: ccServiceNetworkConfigurationPropertyToTerraform(this._networkConfiguration.internalValue),
            observability_configuration: ccServiceServiceObservabilityConfigurationPropertyToTerraform(this._observabilityConfiguration.internalValue),
            service_name: cdktn.stringToTerraform(this._serviceName),
            source_configuration: ccServiceSourceConfigurationPropertyToTerraform(this._sourceConfiguration.internalValue),
            tags: cdktn.listMapper(ccServiceTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auto_scaling_configuration_arn: {
                value: cdktn.stringToHclTerraform(this._autoScalingConfigurationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_configuration: {
                value: ccServiceEncryptionConfigurationPropertyToHclTerraform(this._encryptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.EncryptionConfigurationProperty",
            },
            health_check_configuration: {
                value: ccServiceHealthCheckConfigurationPropertyToHclTerraform(this._healthCheckConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.HealthCheckConfigurationProperty",
            },
            instance_configuration: {
                value: ccServiceInstanceConfigurationPropertyToHclTerraform(this._instanceConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.InstanceConfigurationProperty",
            },
            network_configuration: {
                value: ccServiceNetworkConfigurationPropertyToHclTerraform(this._networkConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.NetworkConfigurationProperty",
            },
            observability_configuration: {
                value: ccServiceServiceObservabilityConfigurationPropertyToHclTerraform(this._observabilityConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.ServiceObservabilityConfigurationProperty",
            },
            service_name: {
                value: cdktn.stringToHclTerraform(this._serviceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_configuration: {
                value: ccServiceSourceConfigurationPropertyToHclTerraform(this._sourceConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcService.SourceConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccServiceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcService.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccServiceEncryptionConfigurationPropertyToTerraform(struct?: CcService.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    }
}


export function ccServiceEncryptionConfigurationPropertyToHclTerraform(struct?: CcService.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key: {
            value: cdktn.stringToHclTerraform(struct!.kmsKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceHealthCheckConfigurationPropertyToTerraform(struct?: CcService.HealthCheckConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        healthy_threshold: cdktn.numberToTerraform(struct!.healthyThreshold),
        interval: cdktn.numberToTerraform(struct!.interval),
        path: cdktn.stringToTerraform(struct!.path),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        timeout: cdktn.numberToTerraform(struct!.timeout),
        unhealthy_threshold: cdktn.numberToTerraform(struct!.unhealthyThreshold),
    }
}


export function ccServiceHealthCheckConfigurationPropertyToHclTerraform(struct?: CcService.HealthCheckConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        healthy_threshold: {
            value: cdktn.numberToHclTerraform(struct!.healthyThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        interval: {
            value: cdktn.numberToHclTerraform(struct!.interval),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout: {
            value: cdktn.numberToHclTerraform(struct!.timeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        unhealthy_threshold: {
            value: cdktn.numberToHclTerraform(struct!.unhealthyThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceInstanceConfigurationPropertyToTerraform(struct?: CcService.InstanceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cpu: cdktn.stringToTerraform(struct!.cpu),
        instance_role_arn: cdktn.stringToTerraform(struct!.instanceRoleArn),
        memory: cdktn.stringToTerraform(struct!.memory),
    }
}


export function ccServiceInstanceConfigurationPropertyToHclTerraform(struct?: CcService.InstanceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cpu: {
            value: cdktn.stringToHclTerraform(struct!.cpu),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.instanceRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory: {
            value: cdktn.stringToHclTerraform(struct!.memory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceEgressConfigurationPropertyToTerraform(struct?: CcService.EgressConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        egress_type: cdktn.stringToTerraform(struct!.egressType),
        vpc_connector_arn: cdktn.stringToTerraform(struct!.vpcConnectorArn),
    }
}


export function ccServiceEgressConfigurationPropertyToHclTerraform(struct?: CcService.EgressConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        egress_type: {
            value: cdktn.stringToHclTerraform(struct!.egressType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc_connector_arn: {
            value: cdktn.stringToHclTerraform(struct!.vpcConnectorArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceIngressConfigurationPropertyToTerraform(struct?: CcService.IngressConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_publicly_accessible: cdktn.booleanToTerraform(struct!.isPubliclyAccessible),
    }
}


export function ccServiceIngressConfigurationPropertyToHclTerraform(struct?: CcService.IngressConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_publicly_accessible: {
            value: cdktn.booleanToHclTerraform(struct!.isPubliclyAccessible),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceNetworkConfigurationPropertyToTerraform(struct?: CcService.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        egress_configuration: ccServiceEgressConfigurationPropertyToTerraform(struct!.egressConfiguration),
        ingress_configuration: ccServiceIngressConfigurationPropertyToTerraform(struct!.ingressConfiguration),
        ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
    }
}


export function ccServiceNetworkConfigurationPropertyToHclTerraform(struct?: CcService.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        egress_configuration: {
            value: ccServiceEgressConfigurationPropertyToHclTerraform(struct!.egressConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EgressConfigurationProperty",
        },
        ingress_configuration: {
            value: ccServiceIngressConfigurationPropertyToHclTerraform(struct!.ingressConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "IngressConfigurationProperty",
        },
        ip_address_type: {
            value: cdktn.stringToHclTerraform(struct!.ipAddressType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceServiceObservabilityConfigurationPropertyToTerraform(struct?: CcService.ServiceObservabilityConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        observability_configuration_arn: cdktn.stringToTerraform(struct!.observabilityConfigurationArn),
        observability_enabled: cdktn.booleanToTerraform(struct!.observabilityEnabled),
    }
}


export function ccServiceServiceObservabilityConfigurationPropertyToHclTerraform(struct?: CcService.ServiceObservabilityConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        observability_configuration_arn: {
            value: cdktn.stringToHclTerraform(struct!.observabilityConfigurationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        observability_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.observabilityEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceAuthenticationConfigurationPropertyToTerraform(struct?: CcService.AuthenticationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_role_arn: cdktn.stringToTerraform(struct!.accessRoleArn),
        connection_arn: cdktn.stringToTerraform(struct!.connectionArn),
    }
}


export function ccServiceAuthenticationConfigurationPropertyToHclTerraform(struct?: CcService.AuthenticationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.accessRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        connection_arn: {
            value: cdktn.stringToHclTerraform(struct!.connectionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceKeyValuePairPropertyToTerraform(struct?: CcService.KeyValuePairProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceKeyValuePairPropertyToHclTerraform(struct?: CcService.KeyValuePairProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesPropertyToTerraform(struct?: CcService.SourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesPropertyToHclTerraform(struct?: CcService.SourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccServiceCodeConfigurationValuesPropertyToTerraform(struct?: CcService.CodeConfigurationValuesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        build_command: cdktn.stringToTerraform(struct!.buildCommand),
        port: cdktn.stringToTerraform(struct!.port),
        runtime: cdktn.stringToTerraform(struct!.runtime),
        runtime_environment_secrets: cdktn.listMapper(ccServiceKeyValuePairPropertyToTerraform, false)(struct!.runtimeEnvironmentSecrets),
        runtime_environment_variables: cdktn.listMapper(ccServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesPropertyToTerraform, false)(struct!.runtimeEnvironmentVariables),
        start_command: cdktn.stringToTerraform(struct!.startCommand),
    }
}


export function ccServiceCodeConfigurationValuesPropertyToHclTerraform(struct?: CcService.CodeConfigurationValuesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        build_command: {
            value: cdktn.stringToHclTerraform(struct!.buildCommand),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        port: {
            value: cdktn.stringToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        runtime: {
            value: cdktn.stringToHclTerraform(struct!.runtime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        runtime_environment_secrets: {
            value: cdktn.listMapperHcl(ccServiceKeyValuePairPropertyToHclTerraform, false)(struct!.runtimeEnvironmentSecrets),
            isBlock: true,
            type: "list",
            storageClassType: "KeyValuePairPropertyList",
        },
        runtime_environment_variables: {
            value: cdktn.listMapperHcl(ccServiceSourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesPropertyToHclTerraform, false)(struct!.runtimeEnvironmentVariables),
            isBlock: true,
            type: "list",
            storageClassType: "SourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesPropertyList",
        },
        start_command: {
            value: cdktn.stringToHclTerraform(struct!.startCommand),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceCodeConfigurationPropertyToTerraform(struct?: CcService.CodeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        code_configuration_values: ccServiceCodeConfigurationValuesPropertyToTerraform(struct!.codeConfigurationValues),
        configuration_source: cdktn.stringToTerraform(struct!.configurationSource),
    }
}


export function ccServiceCodeConfigurationPropertyToHclTerraform(struct?: CcService.CodeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        code_configuration_values: {
            value: ccServiceCodeConfigurationValuesPropertyToHclTerraform(struct!.codeConfigurationValues),
            isBlock: true,
            type: "struct",
            storageClassType: "CodeConfigurationValuesProperty",
        },
        configuration_source: {
            value: cdktn.stringToHclTerraform(struct!.configurationSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceSourceCodeVersionPropertyToTerraform(struct?: CcService.SourceCodeVersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceSourceCodeVersionPropertyToHclTerraform(struct?: CcService.SourceCodeVersionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export function ccServiceCodeRepositoryPropertyToTerraform(struct?: CcService.CodeRepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        code_configuration: ccServiceCodeConfigurationPropertyToTerraform(struct!.codeConfiguration),
        repository_url: cdktn.stringToTerraform(struct!.repositoryUrl),
        source_code_version: ccServiceSourceCodeVersionPropertyToTerraform(struct!.sourceCodeVersion),
        source_directory: cdktn.stringToTerraform(struct!.sourceDirectory),
    }
}


export function ccServiceCodeRepositoryPropertyToHclTerraform(struct?: CcService.CodeRepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        code_configuration: {
            value: ccServiceCodeConfigurationPropertyToHclTerraform(struct!.codeConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "CodeConfigurationProperty",
        },
        repository_url: {
            value: cdktn.stringToHclTerraform(struct!.repositoryUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_code_version: {
            value: ccServiceSourceCodeVersionPropertyToHclTerraform(struct!.sourceCodeVersion),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceCodeVersionProperty",
        },
        source_directory: {
            value: cdktn.stringToHclTerraform(struct!.sourceDirectory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceRuntimeEnvironmentSecretsPropertyToTerraform(struct?: CcService.RuntimeEnvironmentSecretsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceRuntimeEnvironmentSecretsPropertyToHclTerraform(struct?: CcService.RuntimeEnvironmentSecretsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesPropertyToTerraform(struct?: CcService.SourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesPropertyToHclTerraform(struct?: CcService.SourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
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


export function ccServiceImageConfigurationPropertyToTerraform(struct?: CcService.ImageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        port: cdktn.stringToTerraform(struct!.port),
        runtime_environment_secrets: cdktn.listMapper(ccServiceRuntimeEnvironmentSecretsPropertyToTerraform, false)(struct!.runtimeEnvironmentSecrets),
        runtime_environment_variables: cdktn.listMapper(ccServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesPropertyToTerraform, false)(struct!.runtimeEnvironmentVariables),
        start_command: cdktn.stringToTerraform(struct!.startCommand),
    }
}


export function ccServiceImageConfigurationPropertyToHclTerraform(struct?: CcService.ImageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        port: {
            value: cdktn.stringToHclTerraform(struct!.port),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        runtime_environment_secrets: {
            value: cdktn.listMapperHcl(ccServiceRuntimeEnvironmentSecretsPropertyToHclTerraform, false)(struct!.runtimeEnvironmentSecrets),
            isBlock: true,
            type: "list",
            storageClassType: "RuntimeEnvironmentSecretsPropertyList",
        },
        runtime_environment_variables: {
            value: cdktn.listMapperHcl(ccServiceSourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesPropertyToHclTerraform, false)(struct!.runtimeEnvironmentVariables),
            isBlock: true,
            type: "list",
            storageClassType: "SourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesPropertyList",
        },
        start_command: {
            value: cdktn.stringToHclTerraform(struct!.startCommand),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceImageRepositoryPropertyToTerraform(struct?: CcService.ImageRepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        image_configuration: ccServiceImageConfigurationPropertyToTerraform(struct!.imageConfiguration),
        image_identifier: cdktn.stringToTerraform(struct!.imageIdentifier),
        image_repository_type: cdktn.stringToTerraform(struct!.imageRepositoryType),
    }
}


export function ccServiceImageRepositoryPropertyToHclTerraform(struct?: CcService.ImageRepositoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        image_configuration: {
            value: ccServiceImageConfigurationPropertyToHclTerraform(struct!.imageConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ImageConfigurationProperty",
        },
        image_identifier: {
            value: cdktn.stringToHclTerraform(struct!.imageIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_repository_type: {
            value: cdktn.stringToHclTerraform(struct!.imageRepositoryType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceSourceConfigurationPropertyToTerraform(struct?: CcService.SourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authentication_configuration: ccServiceAuthenticationConfigurationPropertyToTerraform(struct!.authenticationConfiguration),
        auto_deployments_enabled: cdktn.booleanToTerraform(struct!.autoDeploymentsEnabled),
        code_repository: ccServiceCodeRepositoryPropertyToTerraform(struct!.codeRepository),
        image_repository: ccServiceImageRepositoryPropertyToTerraform(struct!.imageRepository),
    }
}


export function ccServiceSourceConfigurationPropertyToHclTerraform(struct?: CcService.SourceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authentication_configuration: {
            value: ccServiceAuthenticationConfigurationPropertyToHclTerraform(struct!.authenticationConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthenticationConfigurationProperty",
        },
        auto_deployments_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.autoDeploymentsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        code_repository: {
            value: ccServiceCodeRepositoryPropertyToHclTerraform(struct!.codeRepository),
            isBlock: true,
            type: "struct",
            storageClassType: "CodeRepositoryProperty",
        },
        image_repository: {
            value: ccServiceImageRepositoryPropertyToHclTerraform(struct!.imageRepository),
            isBlock: true,
            type: "struct",
            storageClassType: "ImageRepositoryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccServiceTagPropertyToTerraform(struct?: CcService.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccServiceTagPropertyToHclTerraform(struct?: CcService.TagProperty | cdktn.IResolvable): any {
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


export namespace CcService {
export interface EncryptionConfigurationProperty {
    /**
    * The KMS Key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#kms_key CcService#kms_key}
    */
    readonly kmsKey?: string;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKey = value.kmsKey;
        }
    }

    // kms_key - computed: true, optional: true, required: false
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    public resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
    }
}
export interface HealthCheckConfigurationProperty {
    /**
    * Health check Healthy Threshold
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#healthy_threshold CcService#healthy_threshold}
    */
    readonly healthyThreshold?: number;
    /**
    * Health check Interval
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#interval CcService#interval}
    */
    readonly interval?: number;
    /**
    * Health check Path
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#path CcService#path}
    */
    readonly path?: string;
    /**
    * Health Check Protocol
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#protocol CcService#protocol}
    */
    readonly protocol?: string;
    /**
    * Health check Timeout
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#timeout CcService#timeout}
    */
    readonly timeout?: number;
    /**
    * Health check Unhealthy Threshold
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#unhealthy_threshold CcService#unhealthy_threshold}
    */
    readonly unhealthyThreshold?: number;
}
export class HealthCheckConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HealthCheckConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._healthyThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.healthyThreshold = this._healthyThreshold;
        }
        if (this._interval !== undefined) {
            hasAnyValues = true;
            internalValueResult.interval = this._interval;
        }
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._timeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeout = this._timeout;
        }
        if (this._unhealthyThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HealthCheckConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._healthyThreshold = undefined;
            this._interval = undefined;
            this._path = undefined;
            this._protocol = undefined;
            this._timeout = undefined;
            this._unhealthyThreshold = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._healthyThreshold = value.healthyThreshold;
            this._interval = value.interval;
            this._path = value.path;
            this._protocol = value.protocol;
            this._timeout = value.timeout;
            this._unhealthyThreshold = value.unhealthyThreshold;
        }
    }

    // healthy_threshold - computed: true, optional: true, required: false
    private _healthyThreshold?: number; 
    public get healthyThreshold() {
        return this.getNumberAttribute('healthy_threshold');
    }
    public set healthyThreshold(value: number) {
        this._healthyThreshold = value;
    }
    public resetHealthyThreshold() {
        this._healthyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get healthyThresholdInput() {
        return this._healthyThreshold;
    }

    // interval - computed: true, optional: true, required: false
    private _interval?: number; 
    public get interval() {
        return this.getNumberAttribute('interval');
    }
    public set interval(value: number) {
        this._interval = value;
    }
    public resetInterval() {
        this._interval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intervalInput() {
        return this._interval;
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // timeout - computed: true, optional: true, required: false
    private _timeout?: number; 
    public get timeout() {
        return this.getNumberAttribute('timeout');
    }
    public set timeout(value: number) {
        this._timeout = value;
    }
    public resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
        return this._timeout;
    }

    // unhealthy_threshold - computed: true, optional: true, required: false
    private _unhealthyThreshold?: number; 
    public get unhealthyThreshold() {
        return this.getNumberAttribute('unhealthy_threshold');
    }
    public set unhealthyThreshold(value: number) {
        this._unhealthyThreshold = value;
    }
    public resetUnhealthyThreshold() {
        this._unhealthyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unhealthyThresholdInput() {
        return this._unhealthyThreshold;
    }
}
export interface InstanceConfigurationProperty {
    /**
    * CPU
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#cpu CcService#cpu}
    */
    readonly cpu?: string;
    /**
    * Instance Role Arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#instance_role_arn CcService#instance_role_arn}
    */
    readonly instanceRoleArn?: string;
    /**
    * Memory
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#memory CcService#memory}
    */
    readonly memory?: string;
}
export class InstanceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cpu !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpu = this._cpu;
        }
        if (this._instanceRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceRoleArn = this._instanceRoleArn;
        }
        if (this._memory !== undefined) {
            hasAnyValues = true;
            internalValueResult.memory = this._memory;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cpu = undefined;
            this._instanceRoleArn = undefined;
            this._memory = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cpu = value.cpu;
            this._instanceRoleArn = value.instanceRoleArn;
            this._memory = value.memory;
        }
    }

    // cpu - computed: true, optional: true, required: false
    private _cpu?: string; 
    public get cpu() {
        return this.getStringAttribute('cpu');
    }
    public set cpu(value: string) {
        this._cpu = value;
    }
    public resetCpu() {
        this._cpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuInput() {
        return this._cpu;
    }

    // instance_role_arn - computed: true, optional: true, required: false
    private _instanceRoleArn?: string; 
    public get instanceRoleArn() {
        return this.getStringAttribute('instance_role_arn');
    }
    public set instanceRoleArn(value: string) {
        this._instanceRoleArn = value;
    }
    public resetInstanceRoleArn() {
        this._instanceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceRoleArnInput() {
        return this._instanceRoleArn;
    }

    // memory - computed: true, optional: true, required: false
    private _memory?: string; 
    public get memory() {
        return this.getStringAttribute('memory');
    }
    public set memory(value: string) {
        this._memory = value;
    }
    public resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryInput() {
        return this._memory;
    }
}
export interface EgressConfigurationProperty {
    /**
    * Network egress type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#egress_type CcService#egress_type}
    */
    readonly egressType?: string;
    /**
    * The Amazon Resource Name (ARN) of the App Runner VpcConnector.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#vpc_connector_arn CcService#vpc_connector_arn}
    */
    readonly vpcConnectorArn?: string;
}
export class EgressConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EgressConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._egressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.egressType = this._egressType;
        }
        if (this._vpcConnectorArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcConnectorArn = this._vpcConnectorArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EgressConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._egressType = undefined;
            this._vpcConnectorArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._egressType = value.egressType;
            this._vpcConnectorArn = value.vpcConnectorArn;
        }
    }

    // egress_type - computed: true, optional: true, required: false
    private _egressType?: string; 
    public get egressType() {
        return this.getStringAttribute('egress_type');
    }
    public set egressType(value: string) {
        this._egressType = value;
    }
    public resetEgressType() {
        this._egressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressTypeInput() {
        return this._egressType;
    }

    // vpc_connector_arn - computed: true, optional: true, required: false
    private _vpcConnectorArn?: string; 
    public get vpcConnectorArn() {
        return this.getStringAttribute('vpc_connector_arn');
    }
    public set vpcConnectorArn(value: string) {
        this._vpcConnectorArn = value;
    }
    public resetVpcConnectorArn() {
        this._vpcConnectorArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConnectorArnInput() {
        return this._vpcConnectorArn;
    }
}
export interface IngressConfigurationProperty {
    /**
    * It's set to true if the Apprunner service is publicly accessible. It's set to false otherwise.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#is_publicly_accessible CcService#is_publicly_accessible}
    */
    readonly isPubliclyAccessible?: boolean | cdktn.IResolvable;
}
export class IngressConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IngressConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isPubliclyAccessible !== undefined) {
            hasAnyValues = true;
            internalValueResult.isPubliclyAccessible = this._isPubliclyAccessible;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngressConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isPubliclyAccessible = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isPubliclyAccessible = value.isPubliclyAccessible;
        }
    }

    // is_publicly_accessible - computed: true, optional: true, required: false
    private _isPubliclyAccessible?: boolean | cdktn.IResolvable; 
    public get isPubliclyAccessible() {
        return this.getBooleanAttribute('is_publicly_accessible');
    }
    public set isPubliclyAccessible(value: boolean | cdktn.IResolvable) {
        this._isPubliclyAccessible = value;
    }
    public resetIsPubliclyAccessible() {
        this._isPubliclyAccessible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isPubliclyAccessibleInput() {
        return this._isPubliclyAccessible;
    }
}
export interface NetworkConfigurationProperty {
    /**
    * Network egress configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#egress_configuration CcService#egress_configuration}
    */
    readonly egressConfiguration?: EgressConfigurationProperty;
    /**
    * Network ingress configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#ingress_configuration CcService#ingress_configuration}
    */
    readonly ingressConfiguration?: IngressConfigurationProperty;
    /**
    * App Runner service endpoint IP address type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#ip_address_type CcService#ip_address_type}
    */
    readonly ipAddressType?: string;
}
export class NetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._egressConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.egressConfiguration = this._egressConfiguration?.internalValue;
        }
        if (this._ingressConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ingressConfiguration = this._ingressConfiguration?.internalValue;
        }
        if (this._ipAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddressType = this._ipAddressType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._egressConfiguration.internalValue = undefined;
            this._ingressConfiguration.internalValue = undefined;
            this._ipAddressType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._egressConfiguration.internalValue = value.egressConfiguration;
            this._ingressConfiguration.internalValue = value.ingressConfiguration;
            this._ipAddressType = value.ipAddressType;
        }
    }

    // egress_configuration - computed: true, optional: true, required: false
    private _egressConfiguration = new EgressConfigurationPropertyOutputReference(this, "egress_configuration");
    public get egressConfiguration() {
        return this._egressConfiguration;
    }
    public putEgressConfiguration(value: EgressConfigurationProperty) {
        this._egressConfiguration.internalValue = value;
    }
    public resetEgressConfiguration() {
        this._egressConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get egressConfigurationInput() {
        return this._egressConfiguration.internalValue;
    }

    // ingress_configuration - computed: true, optional: true, required: false
    private _ingressConfiguration = new IngressConfigurationPropertyOutputReference(this, "ingress_configuration");
    public get ingressConfiguration() {
        return this._ingressConfiguration;
    }
    public putIngressConfiguration(value: IngressConfigurationProperty) {
        this._ingressConfiguration.internalValue = value;
    }
    public resetIngressConfiguration() {
        this._ingressConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ingressConfigurationInput() {
        return this._ingressConfiguration.internalValue;
    }

    // ip_address_type - computed: true, optional: true, required: false
    private _ipAddressType?: string; 
    public get ipAddressType() {
        return this.getStringAttribute('ip_address_type');
    }
    public set ipAddressType(value: string) {
        this._ipAddressType = value;
    }
    public resetIpAddressType() {
        this._ipAddressType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipAddressTypeInput() {
        return this._ipAddressType;
    }
}
export interface ServiceObservabilityConfigurationProperty {
    /**
    * The Amazon Resource Name (ARN) of the App Runner ObservabilityConfiguration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#observability_configuration_arn CcService#observability_configuration_arn}
    */
    readonly observabilityConfigurationArn?: string;
    /**
    * Observability enabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#observability_enabled CcService#observability_enabled}
    */
    readonly observabilityEnabled?: boolean | cdktn.IResolvable;
}
export class ServiceObservabilityConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceObservabilityConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._observabilityConfigurationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.observabilityConfigurationArn = this._observabilityConfigurationArn;
        }
        if (this._observabilityEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.observabilityEnabled = this._observabilityEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceObservabilityConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._observabilityConfigurationArn = undefined;
            this._observabilityEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._observabilityConfigurationArn = value.observabilityConfigurationArn;
            this._observabilityEnabled = value.observabilityEnabled;
        }
    }

    // observability_configuration_arn - computed: true, optional: true, required: false
    private _observabilityConfigurationArn?: string; 
    public get observabilityConfigurationArn() {
        return this.getStringAttribute('observability_configuration_arn');
    }
    public set observabilityConfigurationArn(value: string) {
        this._observabilityConfigurationArn = value;
    }
    public resetObservabilityConfigurationArn() {
        this._observabilityConfigurationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get observabilityConfigurationArnInput() {
        return this._observabilityConfigurationArn;
    }

    // observability_enabled - computed: true, optional: true, required: false
    private _observabilityEnabled?: boolean | cdktn.IResolvable; 
    public get observabilityEnabled() {
        return this.getBooleanAttribute('observability_enabled');
    }
    public set observabilityEnabled(value: boolean | cdktn.IResolvable) {
        this._observabilityEnabled = value;
    }
    public resetObservabilityEnabled() {
        this._observabilityEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get observabilityEnabledInput() {
        return this._observabilityEnabled;
    }
}
export interface AuthenticationConfigurationProperty {
    /**
    * Access Role Arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#access_role_arn CcService#access_role_arn}
    */
    readonly accessRoleArn?: string;
    /**
    * Connection Arn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#connection_arn CcService#connection_arn}
    */
    readonly connectionArn?: string;
}
export class AuthenticationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthenticationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessRoleArn = this._accessRoleArn;
        }
        if (this._connectionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionArn = this._connectionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthenticationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessRoleArn = undefined;
            this._connectionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessRoleArn = value.accessRoleArn;
            this._connectionArn = value.connectionArn;
        }
    }

    // access_role_arn - computed: true, optional: true, required: false
    private _accessRoleArn?: string; 
    public get accessRoleArn() {
        return this.getStringAttribute('access_role_arn');
    }
    public set accessRoleArn(value: string) {
        this._accessRoleArn = value;
    }
    public resetAccessRoleArn() {
        this._accessRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessRoleArnInput() {
        return this._accessRoleArn;
    }

    // connection_arn - computed: true, optional: true, required: false
    private _connectionArn?: string; 
    public get connectionArn() {
        return this.getStringAttribute('connection_arn');
    }
    public set connectionArn(value: string) {
        this._connectionArn = value;
    }
    public resetConnectionArn() {
        this._connectionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionArnInput() {
        return this._connectionArn;
    }
}
export interface KeyValuePairProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#name CcService#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#value CcService#value}
    */
    readonly value?: string;
}
export class KeyValuePairPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): KeyValuePairProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KeyValuePairProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
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

export class KeyValuePairPropertyList extends cdktn.ComplexList {
    public internalValue? : KeyValuePairProperty[] | cdktn.IResolvable

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
    public get(index: number): KeyValuePairPropertyOutputReference {
        return new KeyValuePairPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#name CcService#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#value CcService#value}
    */
    readonly value?: string;
}
export class SourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
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

export class SourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesPropertyList extends cdktn.ComplexList {
    public internalValue? : SourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesProperty[] | cdktn.IResolvable

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
    public get(index: number): SourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesPropertyOutputReference {
        return new SourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CodeConfigurationValuesProperty {
    /**
    * Build Command
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#build_command CcService#build_command}
    */
    readonly buildCommand?: string;
    /**
    * Port
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#port CcService#port}
    */
    readonly port?: string;
    /**
    * Runtime
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#runtime CcService#runtime}
    */
    readonly runtime?: string;
    /**
    * The secrets and parameters that get referenced by your service as environment variables
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#runtime_environment_secrets CcService#runtime_environment_secrets}
    */
    readonly runtimeEnvironmentSecrets?: KeyValuePairProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#runtime_environment_variables CcService#runtime_environment_variables}
    */
    readonly runtimeEnvironmentVariables?: SourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesProperty[] | cdktn.IResolvable;
    /**
    * Start Command
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#start_command CcService#start_command}
    */
    readonly startCommand?: string;
}
export class CodeConfigurationValuesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeConfigurationValuesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._buildCommand !== undefined) {
            hasAnyValues = true;
            internalValueResult.buildCommand = this._buildCommand;
        }
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._runtime !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtime = this._runtime;
        }
        if (this._runtimeEnvironmentSecrets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtimeEnvironmentSecrets = this._runtimeEnvironmentSecrets?.internalValue;
        }
        if (this._runtimeEnvironmentVariables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtimeEnvironmentVariables = this._runtimeEnvironmentVariables?.internalValue;
        }
        if (this._startCommand !== undefined) {
            hasAnyValues = true;
            internalValueResult.startCommand = this._startCommand;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeConfigurationValuesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._buildCommand = undefined;
            this._port = undefined;
            this._runtime = undefined;
            this._runtimeEnvironmentSecrets.internalValue = undefined;
            this._runtimeEnvironmentVariables.internalValue = undefined;
            this._startCommand = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._buildCommand = value.buildCommand;
            this._port = value.port;
            this._runtime = value.runtime;
            this._runtimeEnvironmentSecrets.internalValue = value.runtimeEnvironmentSecrets;
            this._runtimeEnvironmentVariables.internalValue = value.runtimeEnvironmentVariables;
            this._startCommand = value.startCommand;
        }
    }

    // build_command - computed: true, optional: true, required: false
    private _buildCommand?: string; 
    public get buildCommand() {
        return this.getStringAttribute('build_command');
    }
    public set buildCommand(value: string) {
        this._buildCommand = value;
    }
    public resetBuildCommand() {
        this._buildCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildCommandInput() {
        return this._buildCommand;
    }

    // port - computed: true, optional: true, required: false
    private _port?: string; 
    public get port() {
        return this.getStringAttribute('port');
    }
    public set port(value: string) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // runtime - computed: true, optional: true, required: false
    private _runtime?: string; 
    public get runtime() {
        return this.getStringAttribute('runtime');
    }
    public set runtime(value: string) {
        this._runtime = value;
    }
    public resetRuntime() {
        this._runtime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeInput() {
        return this._runtime;
    }

    // runtime_environment_secrets - computed: true, optional: true, required: false
    private _runtimeEnvironmentSecrets = new KeyValuePairPropertyList(this, "runtime_environment_secrets", false);
    public get runtimeEnvironmentSecrets() {
        return this._runtimeEnvironmentSecrets;
    }
    public putRuntimeEnvironmentSecrets(value: KeyValuePairProperty[] | cdktn.IResolvable) {
        this._runtimeEnvironmentSecrets.internalValue = value;
    }
    public resetRuntimeEnvironmentSecrets() {
        this._runtimeEnvironmentSecrets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeEnvironmentSecretsInput() {
        return this._runtimeEnvironmentSecrets.internalValue;
    }

    // runtime_environment_variables - computed: true, optional: true, required: false
    private _runtimeEnvironmentVariables = new SourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesPropertyList(this, "runtime_environment_variables", false);
    public get runtimeEnvironmentVariables() {
        return this._runtimeEnvironmentVariables;
    }
    public putRuntimeEnvironmentVariables(value: SourceConfigurationCodeRepositoryCodeConfigurationCodeConfigurationValuesRuntimeEnvironmentVariablesProperty[] | cdktn.IResolvable) {
        this._runtimeEnvironmentVariables.internalValue = value;
    }
    public resetRuntimeEnvironmentVariables() {
        this._runtimeEnvironmentVariables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeEnvironmentVariablesInput() {
        return this._runtimeEnvironmentVariables.internalValue;
    }

    // start_command - computed: true, optional: true, required: false
    private _startCommand?: string; 
    public get startCommand() {
        return this.getStringAttribute('start_command');
    }
    public set startCommand(value: string) {
        this._startCommand = value;
    }
    public resetStartCommand() {
        this._startCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startCommandInput() {
        return this._startCommand;
    }
}
export interface CodeConfigurationProperty {
    /**
    * Code Configuration Values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#code_configuration_values CcService#code_configuration_values}
    */
    readonly codeConfigurationValues?: CodeConfigurationValuesProperty;
    /**
    * Configuration Source
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#configuration_source CcService#configuration_source}
    */
    readonly configurationSource?: string;
}
export class CodeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._codeConfigurationValues?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeConfigurationValues = this._codeConfigurationValues?.internalValue;
        }
        if (this._configurationSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.configurationSource = this._configurationSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._codeConfigurationValues.internalValue = undefined;
            this._configurationSource = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._codeConfigurationValues.internalValue = value.codeConfigurationValues;
            this._configurationSource = value.configurationSource;
        }
    }

    // code_configuration_values - computed: true, optional: true, required: false
    private _codeConfigurationValues = new CodeConfigurationValuesPropertyOutputReference(this, "code_configuration_values");
    public get codeConfigurationValues() {
        return this._codeConfigurationValues;
    }
    public putCodeConfigurationValues(value: CodeConfigurationValuesProperty) {
        this._codeConfigurationValues.internalValue = value;
    }
    public resetCodeConfigurationValues() {
        this._codeConfigurationValues.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeConfigurationValuesInput() {
        return this._codeConfigurationValues.internalValue;
    }

    // configuration_source - computed: true, optional: true, required: false
    private _configurationSource?: string; 
    public get configurationSource() {
        return this.getStringAttribute('configuration_source');
    }
    public set configurationSource(value: string) {
        this._configurationSource = value;
    }
    public resetConfigurationSource() {
        this._configurationSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationSourceInput() {
        return this._configurationSource;
    }
}
export interface SourceCodeVersionProperty {
    /**
    * Source Code Version Type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#type CcService#type}
    */
    readonly type?: string;
    /**
    * Source Code Version Value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#value CcService#value}
    */
    readonly value?: string;
}
export class SourceCodeVersionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceCodeVersionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceCodeVersionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
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
export interface CodeRepositoryProperty {
    /**
    * Code Configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#code_configuration CcService#code_configuration}
    */
    readonly codeConfiguration?: CodeConfigurationProperty;
    /**
    * Repository Url
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#repository_url CcService#repository_url}
    */
    readonly repositoryUrl?: string;
    /**
    * Source Code Version
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#source_code_version CcService#source_code_version}
    */
    readonly sourceCodeVersion?: SourceCodeVersionProperty;
    /**
    * Source Directory
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#source_directory CcService#source_directory}
    */
    readonly sourceDirectory?: string;
}
export class CodeRepositoryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeRepositoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._codeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeConfiguration = this._codeConfiguration?.internalValue;
        }
        if (this._repositoryUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryUrl = this._repositoryUrl;
        }
        if (this._sourceCodeVersion?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceCodeVersion = this._sourceCodeVersion?.internalValue;
        }
        if (this._sourceDirectory !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceDirectory = this._sourceDirectory;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeRepositoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._codeConfiguration.internalValue = undefined;
            this._repositoryUrl = undefined;
            this._sourceCodeVersion.internalValue = undefined;
            this._sourceDirectory = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._codeConfiguration.internalValue = value.codeConfiguration;
            this._repositoryUrl = value.repositoryUrl;
            this._sourceCodeVersion.internalValue = value.sourceCodeVersion;
            this._sourceDirectory = value.sourceDirectory;
        }
    }

    // code_configuration - computed: true, optional: true, required: false
    private _codeConfiguration = new CodeConfigurationPropertyOutputReference(this, "code_configuration");
    public get codeConfiguration() {
        return this._codeConfiguration;
    }
    public putCodeConfiguration(value: CodeConfigurationProperty) {
        this._codeConfiguration.internalValue = value;
    }
    public resetCodeConfiguration() {
        this._codeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeConfigurationInput() {
        return this._codeConfiguration.internalValue;
    }

    // repository_url - computed: true, optional: true, required: false
    private _repositoryUrl?: string; 
    public get repositoryUrl() {
        return this.getStringAttribute('repository_url');
    }
    public set repositoryUrl(value: string) {
        this._repositoryUrl = value;
    }
    public resetRepositoryUrl() {
        this._repositoryUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryUrlInput() {
        return this._repositoryUrl;
    }

    // source_code_version - computed: true, optional: true, required: false
    private _sourceCodeVersion = new SourceCodeVersionPropertyOutputReference(this, "source_code_version");
    public get sourceCodeVersion() {
        return this._sourceCodeVersion;
    }
    public putSourceCodeVersion(value: SourceCodeVersionProperty) {
        this._sourceCodeVersion.internalValue = value;
    }
    public resetSourceCodeVersion() {
        this._sourceCodeVersion.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceCodeVersionInput() {
        return this._sourceCodeVersion.internalValue;
    }

    // source_directory - computed: true, optional: true, required: false
    private _sourceDirectory?: string; 
    public get sourceDirectory() {
        return this.getStringAttribute('source_directory');
    }
    public set sourceDirectory(value: string) {
        this._sourceDirectory = value;
    }
    public resetSourceDirectory() {
        this._sourceDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDirectoryInput() {
        return this._sourceDirectory;
    }
}
export interface RuntimeEnvironmentSecretsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#name CcService#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#value CcService#value}
    */
    readonly value?: string;
}
export class RuntimeEnvironmentSecretsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RuntimeEnvironmentSecretsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuntimeEnvironmentSecretsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
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

export class RuntimeEnvironmentSecretsPropertyList extends cdktn.ComplexList {
    public internalValue? : RuntimeEnvironmentSecretsProperty[] | cdktn.IResolvable

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
    public get(index: number): RuntimeEnvironmentSecretsPropertyOutputReference {
        return new RuntimeEnvironmentSecretsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#name CcService#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#value CcService#value}
    */
    readonly value?: string;
}
export class SourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
        }
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
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

export class SourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesPropertyList extends cdktn.ComplexList {
    public internalValue? : SourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesProperty[] | cdktn.IResolvable

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
    public get(index: number): SourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesPropertyOutputReference {
        return new SourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ImageConfigurationProperty {
    /**
    * Port
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#port CcService#port}
    */
    readonly port?: string;
    /**
    * The secrets and parameters that get referenced by your service as environment variables
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#runtime_environment_secrets CcService#runtime_environment_secrets}
    */
    readonly runtimeEnvironmentSecrets?: RuntimeEnvironmentSecretsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#runtime_environment_variables CcService#runtime_environment_variables}
    */
    readonly runtimeEnvironmentVariables?: SourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesProperty[] | cdktn.IResolvable;
    /**
    * Start Command
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#start_command CcService#start_command}
    */
    readonly startCommand?: string;
}
export class ImageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._port !== undefined) {
            hasAnyValues = true;
            internalValueResult.port = this._port;
        }
        if (this._runtimeEnvironmentSecrets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtimeEnvironmentSecrets = this._runtimeEnvironmentSecrets?.internalValue;
        }
        if (this._runtimeEnvironmentVariables?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtimeEnvironmentVariables = this._runtimeEnvironmentVariables?.internalValue;
        }
        if (this._startCommand !== undefined) {
            hasAnyValues = true;
            internalValueResult.startCommand = this._startCommand;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._port = undefined;
            this._runtimeEnvironmentSecrets.internalValue = undefined;
            this._runtimeEnvironmentVariables.internalValue = undefined;
            this._startCommand = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._port = value.port;
            this._runtimeEnvironmentSecrets.internalValue = value.runtimeEnvironmentSecrets;
            this._runtimeEnvironmentVariables.internalValue = value.runtimeEnvironmentVariables;
            this._startCommand = value.startCommand;
        }
    }

    // port - computed: true, optional: true, required: false
    private _port?: string; 
    public get port() {
        return this.getStringAttribute('port');
    }
    public set port(value: string) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // runtime_environment_secrets - computed: true, optional: true, required: false
    private _runtimeEnvironmentSecrets = new RuntimeEnvironmentSecretsPropertyList(this, "runtime_environment_secrets", false);
    public get runtimeEnvironmentSecrets() {
        return this._runtimeEnvironmentSecrets;
    }
    public putRuntimeEnvironmentSecrets(value: RuntimeEnvironmentSecretsProperty[] | cdktn.IResolvable) {
        this._runtimeEnvironmentSecrets.internalValue = value;
    }
    public resetRuntimeEnvironmentSecrets() {
        this._runtimeEnvironmentSecrets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeEnvironmentSecretsInput() {
        return this._runtimeEnvironmentSecrets.internalValue;
    }

    // runtime_environment_variables - computed: true, optional: true, required: false
    private _runtimeEnvironmentVariables = new SourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesPropertyList(this, "runtime_environment_variables", false);
    public get runtimeEnvironmentVariables() {
        return this._runtimeEnvironmentVariables;
    }
    public putRuntimeEnvironmentVariables(value: SourceConfigurationImageRepositoryImageConfigurationRuntimeEnvironmentVariablesProperty[] | cdktn.IResolvable) {
        this._runtimeEnvironmentVariables.internalValue = value;
    }
    public resetRuntimeEnvironmentVariables() {
        this._runtimeEnvironmentVariables.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeEnvironmentVariablesInput() {
        return this._runtimeEnvironmentVariables.internalValue;
    }

    // start_command - computed: true, optional: true, required: false
    private _startCommand?: string; 
    public get startCommand() {
        return this.getStringAttribute('start_command');
    }
    public set startCommand(value: string) {
        this._startCommand = value;
    }
    public resetStartCommand() {
        this._startCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startCommandInput() {
        return this._startCommand;
    }
}
export interface ImageRepositoryProperty {
    /**
    * Image Configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#image_configuration CcService#image_configuration}
    */
    readonly imageConfiguration?: ImageConfigurationProperty;
    /**
    * Image Identifier
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#image_identifier CcService#image_identifier}
    */
    readonly imageIdentifier?: string;
    /**
    * Image Repository Type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#image_repository_type CcService#image_repository_type}
    */
    readonly imageRepositoryType?: string;
}
export class ImageRepositoryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageRepositoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._imageConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageConfiguration = this._imageConfiguration?.internalValue;
        }
        if (this._imageIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageIdentifier = this._imageIdentifier;
        }
        if (this._imageRepositoryType !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageRepositoryType = this._imageRepositoryType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageRepositoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._imageConfiguration.internalValue = undefined;
            this._imageIdentifier = undefined;
            this._imageRepositoryType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._imageConfiguration.internalValue = value.imageConfiguration;
            this._imageIdentifier = value.imageIdentifier;
            this._imageRepositoryType = value.imageRepositoryType;
        }
    }

    // image_configuration - computed: true, optional: true, required: false
    private _imageConfiguration = new ImageConfigurationPropertyOutputReference(this, "image_configuration");
    public get imageConfiguration() {
        return this._imageConfiguration;
    }
    public putImageConfiguration(value: ImageConfigurationProperty) {
        this._imageConfiguration.internalValue = value;
    }
    public resetImageConfiguration() {
        this._imageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageConfigurationInput() {
        return this._imageConfiguration.internalValue;
    }

    // image_identifier - computed: true, optional: true, required: false
    private _imageIdentifier?: string; 
    public get imageIdentifier() {
        return this.getStringAttribute('image_identifier');
    }
    public set imageIdentifier(value: string) {
        this._imageIdentifier = value;
    }
    public resetImageIdentifier() {
        this._imageIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageIdentifierInput() {
        return this._imageIdentifier;
    }

    // image_repository_type - computed: true, optional: true, required: false
    private _imageRepositoryType?: string; 
    public get imageRepositoryType() {
        return this.getStringAttribute('image_repository_type');
    }
    public set imageRepositoryType(value: string) {
        this._imageRepositoryType = value;
    }
    public resetImageRepositoryType() {
        this._imageRepositoryType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageRepositoryTypeInput() {
        return this._imageRepositoryType;
    }
}
export interface SourceConfigurationProperty {
    /**
    * Authentication Configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#authentication_configuration CcService#authentication_configuration}
    */
    readonly authenticationConfiguration?: AuthenticationConfigurationProperty;
    /**
    * Auto Deployment enabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#auto_deployments_enabled CcService#auto_deployments_enabled}
    */
    readonly autoDeploymentsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Source Code Repository
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#code_repository CcService#code_repository}
    */
    readonly codeRepository?: CodeRepositoryProperty;
    /**
    * Image Repository
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#image_repository CcService#image_repository}
    */
    readonly imageRepository?: ImageRepositoryProperty;
}
export class SourceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authenticationConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authenticationConfiguration = this._authenticationConfiguration?.internalValue;
        }
        if (this._autoDeploymentsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoDeploymentsEnabled = this._autoDeploymentsEnabled;
        }
        if (this._codeRepository?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeRepository = this._codeRepository?.internalValue;
        }
        if (this._imageRepository?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageRepository = this._imageRepository?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authenticationConfiguration.internalValue = undefined;
            this._autoDeploymentsEnabled = undefined;
            this._codeRepository.internalValue = undefined;
            this._imageRepository.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authenticationConfiguration.internalValue = value.authenticationConfiguration;
            this._autoDeploymentsEnabled = value.autoDeploymentsEnabled;
            this._codeRepository.internalValue = value.codeRepository;
            this._imageRepository.internalValue = value.imageRepository;
        }
    }

    // authentication_configuration - computed: true, optional: true, required: false
    private _authenticationConfiguration = new AuthenticationConfigurationPropertyOutputReference(this, "authentication_configuration");
    public get authenticationConfiguration() {
        return this._authenticationConfiguration;
    }
    public putAuthenticationConfiguration(value: AuthenticationConfigurationProperty) {
        this._authenticationConfiguration.internalValue = value;
    }
    public resetAuthenticationConfiguration() {
        this._authenticationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authenticationConfigurationInput() {
        return this._authenticationConfiguration.internalValue;
    }

    // auto_deployments_enabled - computed: true, optional: true, required: false
    private _autoDeploymentsEnabled?: boolean | cdktn.IResolvable; 
    public get autoDeploymentsEnabled() {
        return this.getBooleanAttribute('auto_deployments_enabled');
    }
    public set autoDeploymentsEnabled(value: boolean | cdktn.IResolvable) {
        this._autoDeploymentsEnabled = value;
    }
    public resetAutoDeploymentsEnabled() {
        this._autoDeploymentsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoDeploymentsEnabledInput() {
        return this._autoDeploymentsEnabled;
    }

    // code_repository - computed: true, optional: true, required: false
    private _codeRepository = new CodeRepositoryPropertyOutputReference(this, "code_repository");
    public get codeRepository() {
        return this._codeRepository;
    }
    public putCodeRepository(value: CodeRepositoryProperty) {
        this._codeRepository.internalValue = value;
    }
    public resetCodeRepository() {
        this._codeRepository.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeRepositoryInput() {
        return this._codeRepository.internalValue;
    }

    // image_repository - computed: true, optional: true, required: false
    private _imageRepository = new ImageRepositoryPropertyOutputReference(this, "image_repository");
    public get imageRepository() {
        return this._imageRepository;
    }
    public putImageRepository(value: ImageRepositoryProperty) {
        this._imageRepository.internalValue = value;
    }
    public resetImageRepository() {
        this._imageRepository.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageRepositoryInput() {
        return this._imageRepository.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#key CcService#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apprunner_service#value CcService#value}
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
