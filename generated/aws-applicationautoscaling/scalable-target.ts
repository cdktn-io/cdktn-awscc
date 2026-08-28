// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcScalableTargetProps extends cdktn.TerraformMetaArguments {
    /**
    * The maximum value that you plan to scale out to. When a scaling policy is in effect, Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to changing demand.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#max_capacity CcScalableTarget#max_capacity}
    */
    readonly maxCapacity: number;
    /**
    * The minimum value that you plan to scale in to. When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#min_capacity CcScalableTarget#min_capacity}
    */
    readonly minCapacity: number;
    /**
    * The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.
    *   +  ECS service - The resource type is ``service`` and the unique identifier is the cluster name and service name. Example: ``service/my-cluster/my-service``.
    *   +  Spot Fleet - The resource type is ``spot-fleet-request`` and the unique identifier is the Spot Fleet request ID. Example: ``spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE``.
    *   +  EMR cluster - The resource type is ``instancegroup`` and the unique identifier is the cluster ID and instance group ID. Example: ``instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0``.
    *   +  AppStream 2.0 fleet - The resource type is ``fleet`` and the unique identifier is the fleet name. Example: ``fleet/sample-fleet``.
    *   +  DynamoDB table - The resource type is ``table`` and the unique identifier is the table name. Example: ``table/my-table``.
    *   +  DynamoDB global secondary index - The resource type is ``index`` and the unique identifier is the index name. Example: ``table/my-table/index/my-table-index``.
    *   +  Aurora DB cluster - The resource type is ``cluster`` and the unique identifier is the cluster name. Example: ``cluster:my-db-cluster``.
    *   +  SageMaker endpoint variant - The resource type is ``variant`` and the unique identifier is the resource ID. Example: ``endpoint/my-end-point/variant/KMeansClustering``.
    *   +  Custom resources are not supported with a resource type. This parameter must specify the ``OutputValue`` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://docs.aws.amazon.com/https://github.com/aws/aws-auto-scaling-custom-resource).
    *   +  Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: ``arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE``.
    *   +  Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: ``arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE``.
    *   +  Lambda provisioned concurrency - The resource type is ``function`` and the unique identifier is the function name with a function version or alias name suffix that is not ``$LATEST``. Example: ``function:my-function:prod`` or ``function:my-function:1``.
    *   +  Amazon Keyspaces table - The resource type is ``table`` and the unique identifier is the table name. Example: ``keyspace/mykeyspace/table/mytable``.
    *   +  Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: ``arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5``.
    *   +  Amazon ElastiCache replication group - The resource type is ``replication-group`` and the unique identifier is the replication group name. Example: ``replication-group/mycluster``.
    *   +  Amazon ElastiCache cache cluster - The resource type is ``cache-cluster`` and the unique identifier is the cache cluster name. Example: ``cache-cluster/mycluster``.
    *   +  Neptune cluster - The resource type is ``cluster`` and the unique identifier is the cluster name. Example: ``cluster:mycluster``.
    *   +  SageMaker serverless endpoint - The resource type is ``variant`` and the unique identifier is the resource ID. Example: ``endpoint/my-end-point/variant/KMeansClustering``.
    *   +  SageMaker inference component - The resource type is ``inference-component`` and the unique identifier is the resource ID. Example: ``inference-component/my-inference-component``.
    *   +  Pool of WorkSpaces - The resource type is ``workspacespool`` and the unique identifier is the pool ID. Example: ``workspacespool/wspool-123456``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#resource_id CcScalableTarget#resource_id}
    */
    readonly resourceId: string;
    /**
    * Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf. This can be either an IAM service role that Application Auto Scaling can assume to make calls to other AWS resources on your behalf, or a service-linked role for the specified service. For more information, see [How Application Auto Scaling works with IAM](https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html) in the *Application Auto Scaling User Guide*.
    *  To automatically create a service-linked role (recommended), specify the full ARN of the service-linked role in your stack template. To find the exact ARN of the service-linked role for your AWS or custom resource, see the [Service-linked roles](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-service-linked-roles.html) topic in the *Application Auto Scaling User Guide*. Look for the ARN in the table at the bottom of the page.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#role_arn CcScalableTarget#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.
    *   +  ``ecs:service:DesiredCount`` - The task count of an ECS service.
    *   +  ``elasticmapreduce:instancegroup:InstanceCount`` - The instance count of an EMR Instance Group.
    *   +  ``ec2:spot-fleet-request:TargetCapacity`` - The target capacity of a Spot Fleet.
    *   +  ``appstream:fleet:DesiredCapacity`` - The capacity of an AppStream 2.0 fleet.
    *   +  ``dynamodb:table:ReadCapacityUnits`` - The provisioned read capacity for a DynamoDB table.
    *   +  ``dynamodb:table:WriteCapacityUnits`` - The provisioned write capacity for a DynamoDB table.
    *   +  ``dynamodb:index:ReadCapacityUnits`` - The provisioned read capacity for a DynamoDB global secondary index.
    *   +  ``dynamodb:index:WriteCapacityUnits`` - The provisioned write capacity for a DynamoDB global secondary index.
    *   +  ``rds:cluster:ReadReplicaCount`` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
    *   +  ``sagemaker:variant:DesiredInstanceCount`` - The number of EC2 instances for a SageMaker model endpoint variant.
    *   +  ``custom-resource:ResourceType:Property`` - The scalable dimension for a custom resource provided by your own application or service.
    *   +  ``comprehend:document-classifier-endpoint:DesiredInferenceUnits`` - The number of inference units for an Amazon Comprehend document classification endpoint.
    *   +  ``comprehend:entity-recognizer-endpoint:DesiredInferenceUnits`` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
    *   +  ``lambda:function:ProvisionedConcurrency`` - The provisioned concurrency for a Lambda function.
    *   +  ``cassandra:table:ReadCapacityUnits`` - The provisioned read capacity for an Amazon Keyspaces table.
    *   +  ``cassandra:table:WriteCapacityUnits`` - The provisioned write capacity for an Amazon Keyspaces table.
    *   +  ``kafka:broker-storage:VolumeSize`` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
    *   +  ``elasticache:cache-cluster:Nodes`` - The number of nodes for an Amazon ElastiCache cache cluster.
    *   +  ``elasticache:replication-group:NodeGroups`` - The number of node groups for an Amazon ElastiCache replication group.
    *   +  ``elasticache:replication-group:Replicas`` - The number of replicas per node group for an Amazon ElastiCache replication group.
    *   +  ``neptune:cluster:ReadReplicaCount`` - The count of read replicas in an Amazon Neptune DB cluster.
    *   +  ``sagemaker:variant:DesiredProvisionedConcurrency`` - The provisioned concurrency for a SageMaker serverless endpoint.
    *   +  ``sagemaker:inference-component:DesiredCopyCount`` - The number of copies across an endpoint for a SageMaker inference component.
    *   +  ``workspaces:workspacespool:DesiredUserSessions`` - The number of user sessions for the WorkSpaces in the pool.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#scalable_dimension CcScalableTarget#scalable_dimension}
    */
    readonly scalableDimension: string;
    /**
    * The scheduled actions for the scalable target. Duplicates aren't allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#scheduled_actions CcScalableTarget#scheduled_actions}
    */
    readonly scheduledActions?: CcScalableTarget.ScheduledActionProperty[] | cdktn.IResolvable;
    /**
    * The namespace of the AWS service that provides the resource, or a ``custom-resource``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#service_namespace CcScalableTarget#service_namespace}
    */
    readonly serviceNamespace: string;
    /**
    * An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. Setting the value of an attribute to ``true`` suspends the specified scaling activities. Setting it to ``false`` (default) resumes the specified scaling activities. 
    *   *Suspension Outcomes* 
    *   +  For ``DynamicScalingInSuspended``, while a suspension is in effect, all scale-in activities that are triggered by a scaling policy are suspended.
    *   +  For ``DynamicScalingOutSuspended``, while a suspension is in effect, all scale-out activities that are triggered by a scaling policy are suspended.
    *   +  For ``ScheduledScalingSuspended``, while a suspension is in effect, all scaling activities that involve scheduled actions are suspended.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#suspended_state CcScalableTarget#suspended_state}
    */
    readonly suspendedState?: CcScalableTarget.SuspendedStateProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target awscc_applicationautoscaling_scalable_target}
*/
export class CcScalableTarget extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_applicationautoscaling_scalable_target";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcScalableTarget resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcScalableTarget to import
    * @param importFromId The id of the existing CcScalableTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcScalableTarget to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_applicationautoscaling_scalable_target", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target awscc_applicationautoscaling_scalable_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcScalableTargetProps
    */
    public constructor(scope: Construct, id: string, config: CcScalableTargetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_applicationautoscaling_scalable_target',
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
        this._maxCapacity = config.maxCapacity;
        this._minCapacity = config.minCapacity;
        this._resourceId = config.resourceId;
        this._roleArn = config.roleArn;
        this._scalableDimension = config.scalableDimension;
        this._scheduledActions.internalValue = config.scheduledActions;
        this._serviceNamespace = config.serviceNamespace;
        this._suspendedState.internalValue = config.suspendedState;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // max_capacity - computed: false, optional: false, required: true
    private _maxCapacity?: number; 
    public get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    public set maxCapacity(value: number) {
        this._maxCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
        return this._maxCapacity;
    }

    // min_capacity - computed: false, optional: false, required: true
    private _minCapacity?: number; 
    public get minCapacity() {
        return this.getNumberAttribute('min_capacity');
    }
    public set minCapacity(value: number) {
        this._minCapacity = value;
    }
    // Temporarily expose input value. Use with caution.
    public get minCapacityInput() {
        return this._minCapacity;
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
    public get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
        this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
        return this._resourceId;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // scalable_dimension - computed: false, optional: false, required: true
    private _scalableDimension?: string; 
    public get scalableDimension() {
        return this.getStringAttribute('scalable_dimension');
    }
    public set scalableDimension(value: string) {
        this._scalableDimension = value;
    }
    // Temporarily expose input value. Use with caution.
    public get scalableDimensionInput() {
        return this._scalableDimension;
    }

    // scalable_target_id - computed: true, optional: false, required: false
    public get scalableTargetId() {
        return this.getStringAttribute('scalable_target_id');
    }

    // scheduled_actions - computed: true, optional: true, required: false
    private _scheduledActions = new CcScalableTarget.ScheduledActionPropertyList(this, "scheduled_actions", true);
    public get scheduledActions() {
        return this._scheduledActions;
    }
    public putScheduledActions(value: CcScalableTarget.ScheduledActionProperty[] | cdktn.IResolvable) {
        this._scheduledActions.internalValue = value;
    }
    public resetScheduledActions() {
        this._scheduledActions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduledActionsInput() {
        return this._scheduledActions.internalValue;
    }

    // service_namespace - computed: false, optional: false, required: true
    private _serviceNamespace?: string; 
    public get serviceNamespace() {
        return this.getStringAttribute('service_namespace');
    }
    public set serviceNamespace(value: string) {
        this._serviceNamespace = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNamespaceInput() {
        return this._serviceNamespace;
    }

    // suspended_state - computed: true, optional: true, required: false
    private _suspendedState = new CcScalableTarget.SuspendedStatePropertyOutputReference(this, "suspended_state");
    public get suspendedState() {
        return this._suspendedState;
    }
    public putSuspendedState(value: CcScalableTarget.SuspendedStateProperty) {
        this._suspendedState.internalValue = value;
    }
    public resetSuspendedState() {
        this._suspendedState.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get suspendedStateInput() {
        return this._suspendedState.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            max_capacity: cdktn.numberToTerraform(this._maxCapacity),
            min_capacity: cdktn.numberToTerraform(this._minCapacity),
            resource_id: cdktn.stringToTerraform(this._resourceId),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            scalable_dimension: cdktn.stringToTerraform(this._scalableDimension),
            scheduled_actions: cdktn.listMapper(ccScalableTargetScheduledActionPropertyToTerraform, false)(this._scheduledActions.internalValue),
            service_namespace: cdktn.stringToTerraform(this._serviceNamespace),
            suspended_state: ccScalableTargetSuspendedStatePropertyToTerraform(this._suspendedState.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            max_capacity: {
                value: cdktn.numberToHclTerraform(this._maxCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            min_capacity: {
                value: cdktn.numberToHclTerraform(this._minCapacity),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            resource_id: {
                value: cdktn.stringToHclTerraform(this._resourceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scalable_dimension: {
                value: cdktn.stringToHclTerraform(this._scalableDimension),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scheduled_actions: {
                value: cdktn.listMapperHcl(ccScalableTargetScheduledActionPropertyToHclTerraform, false)(this._scheduledActions.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcScalableTarget.ScheduledActionPropertyList",
            },
            service_namespace: {
                value: cdktn.stringToHclTerraform(this._serviceNamespace),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            suspended_state: {
                value: ccScalableTargetSuspendedStatePropertyToHclTerraform(this._suspendedState.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcScalableTarget.SuspendedStateProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccScalableTargetScalableTargetActionPropertyToTerraform(struct?: CcScalableTarget.ScalableTargetActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
        min_capacity: cdktn.numberToTerraform(struct!.minCapacity),
    }
}


export function ccScalableTargetScalableTargetActionPropertyToHclTerraform(struct?: CcScalableTarget.ScalableTargetActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_capacity: {
            value: cdktn.numberToHclTerraform(struct!.maxCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_capacity: {
            value: cdktn.numberToHclTerraform(struct!.minCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalableTargetScheduledActionPropertyToTerraform(struct?: CcScalableTarget.ScheduledActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_time: cdktn.stringToTerraform(struct!.endTime),
        scalable_target_action: ccScalableTargetScalableTargetActionPropertyToTerraform(struct!.scalableTargetAction),
        schedule: cdktn.stringToTerraform(struct!.schedule),
        scheduled_action_name: cdktn.stringToTerraform(struct!.scheduledActionName),
        start_time: cdktn.stringToTerraform(struct!.startTime),
        timezone: cdktn.stringToTerraform(struct!.timezone),
    }
}


export function ccScalableTargetScheduledActionPropertyToHclTerraform(struct?: CcScalableTarget.ScheduledActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_time: {
            value: cdktn.stringToHclTerraform(struct!.endTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scalable_target_action: {
            value: ccScalableTargetScalableTargetActionPropertyToHclTerraform(struct!.scalableTargetAction),
            isBlock: true,
            type: "struct",
            storageClassType: "ScalableTargetActionProperty",
        },
        schedule: {
            value: cdktn.stringToHclTerraform(struct!.schedule),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scheduled_action_name: {
            value: cdktn.stringToHclTerraform(struct!.scheduledActionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_time: {
            value: cdktn.stringToHclTerraform(struct!.startTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timezone: {
            value: cdktn.stringToHclTerraform(struct!.timezone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccScalableTargetSuspendedStatePropertyToTerraform(struct?: CcScalableTarget.SuspendedStateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dynamic_scaling_in_suspended: cdktn.booleanToTerraform(struct!.dynamicScalingInSuspended),
        dynamic_scaling_out_suspended: cdktn.booleanToTerraform(struct!.dynamicScalingOutSuspended),
        scheduled_scaling_suspended: cdktn.booleanToTerraform(struct!.scheduledScalingSuspended),
    }
}


export function ccScalableTargetSuspendedStatePropertyToHclTerraform(struct?: CcScalableTarget.SuspendedStateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dynamic_scaling_in_suspended: {
            value: cdktn.booleanToHclTerraform(struct!.dynamicScalingInSuspended),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        dynamic_scaling_out_suspended: {
            value: cdktn.booleanToHclTerraform(struct!.dynamicScalingOutSuspended),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        scheduled_scaling_suspended: {
            value: cdktn.booleanToHclTerraform(struct!.scheduledScalingSuspended),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcScalableTarget {
export interface ScalableTargetActionProperty {
    /**
    * The maximum capacity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#max_capacity CcScalableTarget#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * The minimum capacity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#min_capacity CcScalableTarget#min_capacity}
    */
    readonly minCapacity?: number;
}
export class ScalableTargetActionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScalableTargetActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacity = this._maxCapacity;
        }
        if (this._minCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.minCapacity = this._minCapacity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScalableTargetActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxCapacity = undefined;
            this._minCapacity = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxCapacity = value.maxCapacity;
            this._minCapacity = value.minCapacity;
        }
    }

    // max_capacity - computed: true, optional: true, required: false
    private _maxCapacity?: number; 
    public get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    public set maxCapacity(value: number) {
        this._maxCapacity = value;
    }
    public resetMaxCapacity() {
        this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
        return this._maxCapacity;
    }

    // min_capacity - computed: true, optional: true, required: false
    private _minCapacity?: number; 
    public get minCapacity() {
        return this.getNumberAttribute('min_capacity');
    }
    public set minCapacity(value: number) {
        this._minCapacity = value;
    }
    public resetMinCapacity() {
        this._minCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minCapacityInput() {
        return this._minCapacity;
    }
}
export interface ScheduledActionProperty {
    /**
    * The date and time that the action is scheduled to end, in UTC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#end_time CcScalableTarget#end_time}
    */
    readonly endTime?: string;
    /**
    * The new minimum and maximum capacity. You can set both values or just one. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#scalable_target_action CcScalableTarget#scalable_target_action}
    */
    readonly scalableTargetAction?: ScalableTargetActionProperty;
    /**
    * The schedule for this action. The following formats are supported:
    *   +  At expressions - "``at(yyyy-mm-ddThh:mm:ss)``"
    *   +  Rate expressions - "``rate(valueunit)``"
    *   +  Cron expressions - "``cron(fields)``"
    *   
    *  At expressions are useful for one-time schedules. Cron expressions are useful for scheduled actions that run periodically at a specified date and time, and rate expressions are useful for scheduled actions that run at a regular interval.
    *  At and cron expressions use Universal Coordinated Time (UTC) by default.
    *  The cron format consists of six fields separated by white spaces: [Minutes] [Hours] [Day_of_Month] [Month] [Day_of_Week] [Year].
    *  For rate expressions, *value* is a positive integer and *unit* is ``minute`` | ``minutes`` | ``hour`` | ``hours`` | ``day`` | ``days``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#schedule CcScalableTarget#schedule}
    */
    readonly schedule?: string;
    /**
    * The name of the scheduled action. This name must be unique among all other scheduled actions on the specified scalable target.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#scheduled_action_name CcScalableTarget#scheduled_action_name}
    */
    readonly scheduledActionName?: string;
    /**
    * The date and time that the action is scheduled to begin, in UTC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#start_time CcScalableTarget#start_time}
    */
    readonly startTime?: string;
    /**
    * The time zone used when referring to the date and time of a scheduled action, when the scheduled action uses an at or cron expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#timezone CcScalableTarget#timezone}
    */
    readonly timezone?: string;
}
export class ScheduledActionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ScheduledActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime;
        }
        if (this._scalableTargetAction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalableTargetAction = this._scalableTargetAction?.internalValue;
        }
        if (this._schedule !== undefined) {
            hasAnyValues = true;
            internalValueResult.schedule = this._schedule;
        }
        if (this._scheduledActionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduledActionName = this._scheduledActionName;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        if (this._timezone !== undefined) {
            hasAnyValues = true;
            internalValueResult.timezone = this._timezone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduledActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endTime = undefined;
            this._scalableTargetAction.internalValue = undefined;
            this._schedule = undefined;
            this._scheduledActionName = undefined;
            this._startTime = undefined;
            this._timezone = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endTime = value.endTime;
            this._scalableTargetAction.internalValue = value.scalableTargetAction;
            this._schedule = value.schedule;
            this._scheduledActionName = value.scheduledActionName;
            this._startTime = value.startTime;
            this._timezone = value.timezone;
        }
    }

    // end_time - computed: true, optional: true, required: false
    private _endTime?: string; 
    public get endTime() {
        return this.getStringAttribute('end_time');
    }
    public set endTime(value: string) {
        this._endTime = value;
    }
    public resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime;
    }

    // scalable_target_action - computed: true, optional: true, required: false
    private _scalableTargetAction = new ScalableTargetActionPropertyOutputReference(this, "scalable_target_action");
    public get scalableTargetAction() {
        return this._scalableTargetAction;
    }
    public putScalableTargetAction(value: ScalableTargetActionProperty) {
        this._scalableTargetAction.internalValue = value;
    }
    public resetScalableTargetAction() {
        this._scalableTargetAction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalableTargetActionInput() {
        return this._scalableTargetAction.internalValue;
    }

    // schedule - computed: true, optional: true, required: false
    private _schedule?: string; 
    public get schedule() {
        return this.getStringAttribute('schedule');
    }
    public set schedule(value: string) {
        this._schedule = value;
    }
    public resetSchedule() {
        this._schedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule;
    }

    // scheduled_action_name - computed: true, optional: true, required: false
    private _scheduledActionName?: string; 
    public get scheduledActionName() {
        return this.getStringAttribute('scheduled_action_name');
    }
    public set scheduledActionName(value: string) {
        this._scheduledActionName = value;
    }
    public resetScheduledActionName() {
        this._scheduledActionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduledActionNameInput() {
        return this._scheduledActionName;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: string; 
    public get startTime() {
        return this.getStringAttribute('start_time');
    }
    public set startTime(value: string) {
        this._startTime = value;
    }
    public resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }

    // timezone - computed: true, optional: true, required: false
    private _timezone?: string; 
    public get timezone() {
        return this.getStringAttribute('timezone');
    }
    public set timezone(value: string) {
        this._timezone = value;
    }
    public resetTimezone() {
        this._timezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timezoneInput() {
        return this._timezone;
    }
}

export class ScheduledActionPropertyList extends cdktn.ComplexList {
    public internalValue? : ScheduledActionProperty[] | cdktn.IResolvable

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
    public get(index: number): ScheduledActionPropertyOutputReference {
        return new ScheduledActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SuspendedStateProperty {
    /**
    * Whether scale in by a target tracking scaling policy or a step scaling policy is suspended. Set the value to ``true`` if you don't want Application Auto Scaling to remove capacity when a scaling policy is triggered. The default is ``false``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#dynamic_scaling_in_suspended CcScalableTarget#dynamic_scaling_in_suspended}
    */
    readonly dynamicScalingInSuspended?: boolean | cdktn.IResolvable;
    /**
    * Whether scale out by a target tracking scaling policy or a step scaling policy is suspended. Set the value to ``true`` if you don't want Application Auto Scaling to add capacity when a scaling policy is triggered. The default is ``false``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#dynamic_scaling_out_suspended CcScalableTarget#dynamic_scaling_out_suspended}
    */
    readonly dynamicScalingOutSuspended?: boolean | cdktn.IResolvable;
    /**
    * Whether scheduled scaling is suspended. Set the value to ``true`` if you don't want Application Auto Scaling to add or remove capacity by initiating scheduled actions. The default is ``false``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/applicationautoscaling_scalable_target#scheduled_scaling_suspended CcScalableTarget#scheduled_scaling_suspended}
    */
    readonly scheduledScalingSuspended?: boolean | cdktn.IResolvable;
}
export class SuspendedStatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SuspendedStateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dynamicScalingInSuspended !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamicScalingInSuspended = this._dynamicScalingInSuspended;
        }
        if (this._dynamicScalingOutSuspended !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamicScalingOutSuspended = this._dynamicScalingOutSuspended;
        }
        if (this._scheduledScalingSuspended !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduledScalingSuspended = this._scheduledScalingSuspended;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SuspendedStateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dynamicScalingInSuspended = undefined;
            this._dynamicScalingOutSuspended = undefined;
            this._scheduledScalingSuspended = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dynamicScalingInSuspended = value.dynamicScalingInSuspended;
            this._dynamicScalingOutSuspended = value.dynamicScalingOutSuspended;
            this._scheduledScalingSuspended = value.scheduledScalingSuspended;
        }
    }

    // dynamic_scaling_in_suspended - computed: true, optional: true, required: false
    private _dynamicScalingInSuspended?: boolean | cdktn.IResolvable; 
    public get dynamicScalingInSuspended() {
        return this.getBooleanAttribute('dynamic_scaling_in_suspended');
    }
    public set dynamicScalingInSuspended(value: boolean | cdktn.IResolvable) {
        this._dynamicScalingInSuspended = value;
    }
    public resetDynamicScalingInSuspended() {
        this._dynamicScalingInSuspended = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamicScalingInSuspendedInput() {
        return this._dynamicScalingInSuspended;
    }

    // dynamic_scaling_out_suspended - computed: true, optional: true, required: false
    private _dynamicScalingOutSuspended?: boolean | cdktn.IResolvable; 
    public get dynamicScalingOutSuspended() {
        return this.getBooleanAttribute('dynamic_scaling_out_suspended');
    }
    public set dynamicScalingOutSuspended(value: boolean | cdktn.IResolvable) {
        this._dynamicScalingOutSuspended = value;
    }
    public resetDynamicScalingOutSuspended() {
        this._dynamicScalingOutSuspended = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamicScalingOutSuspendedInput() {
        return this._dynamicScalingOutSuspended;
    }

    // scheduled_scaling_suspended - computed: true, optional: true, required: false
    private _scheduledScalingSuspended?: boolean | cdktn.IResolvable; 
    public get scheduledScalingSuspended() {
        return this.getBooleanAttribute('scheduled_scaling_suspended');
    }
    public set scheduledScalingSuspended(value: boolean | cdktn.IResolvable) {
        this._scheduledScalingSuspended = value;
    }
    public resetScheduledScalingSuspended() {
        this._scheduledScalingSuspended = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduledScalingSuspendedInput() {
        return this._scheduledScalingSuspended;
    }
}
}
